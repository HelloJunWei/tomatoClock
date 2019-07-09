export const admin = {
  login,
  logout,
  checkStatus,
  refreshToken,
  checkLevel
}
function login (username, password) {
  return new Promise((resolve, reject) => {
    axios.post('/Vapi/admin/login', {
      name: username,
      password: password
    })
      .then(function (response) {
        let json = response.data
        localStorage.setItem('admin', json.data.token)
        resolve(json)
      })
      .catch(function (error) {
        console.log(error.message)
        reject(error)
      })
  })
}
function logout () {
  return new Promise((resolve, reject) => {
    axios.post('/Vapi/admin/logout', {})
      .then(function (response) {
        localStorage.removeItem('admin')
        resolve()
      })
      .catch(function (error) {
        console.log(error.message)
        localStorage.removeItem('admin')
        reject(error)
      })
  })
}
function checkStatus () {
  return new Promise((resolve, reject) => {
    axios.post('/Vapi/admin/checkToken', {}, { headers: helper().authHeader() })
      .then(function (response) {
        let json = response.data
        resolve(json)
      })
      .catch(function (error) {
        console.log(error.message)
        reject(error)
      })
  })
}
function refreshToken () {
  return new Promise((resolve, reject) => {
    axios.post('/Vapi/admin/refreshToken', {}, { headers: helper().authHeader() })
      .then(function (response) {
        let json = response.data
        resolve(json)
      })
      .catch(function (error) {
        console.log(error.message)
        reject(error)
      })
  })
}
function checkLevel () {
  return new Promise((resolve, reject) => {
    axios.post('/Vapi/admin/checkLevel', {}, { headers: helper().authHeader() })
      .then(function (response) {
        let json = response.data
        resolve(json)
      })
      .catch(function (error) {
        console.log(error.message)
        reject(error)
      })
  })
}
