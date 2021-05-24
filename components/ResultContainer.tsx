import { FC } from 'react'
import { TmdbApiResponseType } from '../interfaces'
import { Thumbnail } from './Thumbnail'
import FlipMove from 'react-flip-move'

interface ResultContainerProps {
  apiData: TmdbApiResponseType
}

export const ResultContainer: FC<ResultContainerProps> = ({ apiData }) => {
  return (
    <>
      <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
        {apiData &&
          apiData.results.map((result) => {
            return <Thumbnail key={result.id} result={result} />
          })}
      </FlipMove>
    </>
  )
}
