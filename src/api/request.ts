import Axios from 'axios';
interface IOptions {
    method: string;
    data: any;
}

const resolveMethod = (opt: any) => {
    const url = opt.url;
    const { method = 'get', data } = opt.options;
    switch (method.toLowerCase()) {
        case 'get':
            if (data) {
                return Axios.get(url, {
                    params: data,
                });
            } else {
                return Axios.get(url);
            }
        case 'pose':
            return Axios.post(url, data);
        case 'delete':
            return Axios.delete(url, {
                data,
            });
        case 'put':
            return Axios.put(url, data);
        default:
            return Axios(opt);
    }
};

export default async function request(url: string, options?: IOptions) {
    return await resolveMethod({ url, ...{ options } }).then(
        ({ data }) => {
            console.log('====================================');
            console.log(data);
            console.log('====================================');
        },
        (error) => {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        },
    );
}
