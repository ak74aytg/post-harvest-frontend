import React, { useState } from 'react'
import ImageUpload from '../Components/ImageUpload/ImageUpload'
import { Box } from '@mui/material'
import ShowImages from '../Components/ImageUpload/ShowImages'

function UploadImages() {
  const [isChange, setIsChange] = useState(false);
  return (
      <div className='w-full pt-10 flex flex-col items-center'>
          <ImageUpload change={setIsChange} />
      <Box className="mt-14 w-full" sx={{ "background-color": "#f4f4f4" }}>
        <h1 className='text-5xl text-center'>Images</h1>
              <ShowImages change={isChange} setChange={setIsChange} />
          </Box>
    </div>
  )
}

export default UploadImages