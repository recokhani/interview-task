import {toast} from "vue-sonner";
import {useRouter} from "#vue-router";

export class ErrorHandler {
    static handleError(error, router) {
        // console.log(error?.response?.status);
        if (error.response) {
            console.log(error.response.data);
            switch (error.response.status) {
                case 401:
                    toast.error('لطفا مجدد لاگین کیند');
                    break;
                case 404:
                    toast.error('صفحه مورد نظر یافت نشد');
                    router.push('/404');
                    break;
                case 403:
                    if(error?.response?.data?.message === 'Your account is blocked'){
                        toast.error('شما به کاربر غیرفعال تبدیل شدید');
                      setTimeout(()=>{
                          router.push('/');
                      },2000)
                    }
                    break;
                case 500:
                    toast.error('خطا در برقراری ارتباط با سرور');
                    router.push('/500');
                    break;
                default:
                    toast.error(error?.response?.data?.message || 'خطای ناشناخته');
                    break;
            }
        } else if (error.request) {
            // console.log('No response received:', error.request);
            toast.error('عدم پاسخ از سرور');
        } else {
            // console.log('Error:', error.message);
            if(error.response.data){
                toast.error('خطای ناشناخته: ' + error.response.data);
            }else{
                toast.error('خطای ناشناخته: ' + error.message);
            }

        }
    }
}

