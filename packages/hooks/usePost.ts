// import { APIClient } from "@api/client";

/**
 * Fetches based on the given request method and body (optional)
 * @param {string} url - Url to send the request to
 * @param {string} method - HTTP method (GET|POST|PUT|DELETE)
 * @param {Object} body - Options you want to pass to the request
 * @param {function} triggerLoading - Callback triggered when the request is being sent. (Usage: Loading Animations)
 * @param {function} onSuccess - Callback triggered when the request is successful
 * @param {function} onFail - Callback triggered when the request is not successful
 */
export const usePost = ({
  url,
  body,
  triggerLoading,
  onSuccess,
  onFail
}: {
  url: string
  body: any
  triggerLoading?: (state: boolean) => void
  onSuccess: (data?: any) => void
  onFail?: () => void
}) => {
  const doFetch = async () => {
    try {
      if (triggerLoading) {
        triggerLoading(true)
      }
      // const client = APIClient();
      // const { data } = await client.post(url, body);
      // if (onSuccess) {
      //   onSuccess(data);
      // }
      // return { data };
    } catch (err) {
      setTimeout(() => {
        if (triggerLoading) {
          triggerLoading(false)
        }
        if (onFail) {
          onFail()
        }
      }, 2000)
    }
  }
  return doFetch
}
