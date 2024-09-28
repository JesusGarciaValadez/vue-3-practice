

export default function usePageRequest() {
  async function makeRequest(url) {
    const data = await fetch(url)
    return await data.json()
  }

  return {
    makeRequest
  }
}
