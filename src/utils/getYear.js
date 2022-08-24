export const getCurrentYear = () => {
  let today = new Date()
  let year = today.getFullYear()
  return year.toString()
}
