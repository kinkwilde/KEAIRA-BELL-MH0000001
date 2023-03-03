import { appSecret } from '$lib/server/secrets';

export async function load() {
    console.log('SECRET', appSecret);
}
