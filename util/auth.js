export const isAuthenticated = () => {
    // Implement logic to check if the user is authenticated
    return !!localStorage.getItem('token')
  }
  
  export const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/auth/login'
  }
  