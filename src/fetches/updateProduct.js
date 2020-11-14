import axios from 'axios';
import toPascalCase from 'utils/toPascalCase.js';
import Cookies from 'js-cookie';



const create = async (push, elements, id, type) => {

	const data = {
		_method: 'put',
		name: elements.name.value,
		description: elements.description.value,
		price: Math.round((elements.price.value) * 100),
		fragrance_id: Number(elements.fragrance_id.value),
		type: toPascalCase(type),
		...((['shampoo', 'liquid soap', 'toothpaste'].indexOf(type) > -1) && {value: elements.value.value}),
		...((['solid shampoo', 'soap'].indexOf(type) > -1) && {weight: elements.weight.value}),
		...(type === 'toothpaste' && {whitening_effect: elements.whitening_effect.checked}),
		...((['soap', 'liquid soap'].indexOf(type) > -1) && {is_antibacterial: elements.is_antibacterial.checked}),
		...(type === 'liquid soap' && {contains_surfactants: elements.contains_surfactants.checked})
	};

	const token = Cookies.get('token');

	try {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		const response = await axios(process.env.REACT_APP_BACK_PATH +'/api/products/' + id, {
			method: 'post',
			data,
			Accept: 'application/json'
		});

        push('/products');
	}
	catch (err) {
		if ( err.response.status === 403) {
			console.log('unauthorized');
		}
	}
};

export default create;
