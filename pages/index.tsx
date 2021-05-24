import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Layout from '../components/Layout'
import { ResultContainer } from '../components/ResultContainer'
import { RequestKeys, TmdbApiResponseType } from '../interfaces'
import { requests } from '../utils/requests'

const IndexPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <>
      <Layout title='Hulu 2.0 Clone' />
      <ResultContainer apiData={props.apiData} />
    </>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps<{
  apiData: TmdbApiResponseType
}> = async (context) => {
  const genre = context.query.genre as RequestKeys

  const url = `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }`

  const apiData = await fetch(url).then((res) => {
    const data: Promise<TmdbApiResponseType> = res.json()
    return data
  })

  return {
    props: {
      apiData,
    },
  }
}
