const validFirstSign = [''];
const regExp = "^\\d*\\.\\d+$|\\d+(\\.\\d*)?$";

const numberValidate = (val) => {
	return (val.match(regExp) || validFirstSign.indexOf(val) >= 0);
};

export default numberValidate;
