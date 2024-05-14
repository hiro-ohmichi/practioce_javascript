const reg = new RegExp("^(a|aa)+$");
const str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!";
str.match(reg).forEach((element) => {
  console.log(element);
});
