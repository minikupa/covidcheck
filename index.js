const { fetch, logger, generateSchoolListTable, requestUrl } = require('./utils')

const api = require('./api'); // semicolon is needed to break statement

module.exports = async function autocheck(code, name, bitrh, password) {
  fetch.setRequestUrl('https://' + requestUrl(code))
  
  let userToken = ''
  try {
    userToken = await api.findUser(code, name, bitrh)
  } catch (e) {
    return "이름, 생일을 확인해주세요.";
  }

  fetch.setToken(userToken)

  try {
    userToken = await api.checkPassword(userToken, password)
  } catch (e) {
    return "비밀번호를 확인해주세요.";
  }

  fetch.setToken(userToken)

  const usersInAccount = await api.getGroupList()

  const user = usersInAccount.find(item => item.name === name)
  if (!user) return logger.logError('알 수 없는 이유로 참여자 목록에서 학생정보를 불러오지 못했어요.')

  const surveyToken = await api.getSurveyToken(code, user)

  await api.sendSurveyData(surveyToken, user.name)

  return "자가진단에 성공했습니다.";
}
