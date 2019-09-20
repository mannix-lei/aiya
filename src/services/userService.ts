import request from '../api/index';

export async function getInfo() {
    const data = await request('/getUser', {
        method: 'get',
        data: {},
    });
}
