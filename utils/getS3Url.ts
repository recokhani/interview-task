
import {useRuntimeConfig} from "#imports";

export const getS3Url = (file:any) => {
    const runtimeConfig = useRuntimeConfig()
    const backUrl = runtimeConfig.public.VITE_API_BASE_URL;
    const bucketName = runtimeConfig.public.ARVAN_BUCKET_NAME;
    const endpoint = runtimeConfig.public.ARVAN_END_POINT;

    if (file.storageType === 'local') {
        return `${backUrl}/${file.avatar}`;
    } else {
        return `${endpoint}/${bucketName}/${file.avatar}`;
    }
};
