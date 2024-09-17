import SampleButtons from "./sampleButtons"

const SampleBlock = () => {
  return (
    <main className='container mb-96 mt-20'>
      <div className='my-4 rounded-md border p-4 shadow'>
        <h3>Typography:</h3>
        <div className='pl-6'>
          <h1>(h1)Find the stuff you&#39;ll love.</h1>
          <h2>(h2)Find the stuff you&#39;ll love.</h2>
          <h3>(h3)Find the stuff you&#39;ll love.</h3>
          <h4>(h4)Find the stuff you&#39;ll love.</h4>
          <h5>(h5)Find the stuff you&#39;ll love. </h5>
          <h6>(h6)Find the stuff you&#39;ll love.</h6>
          <p>(h5)Find the stuff you&#39;ll love.</p>
        </div>
      </div>

      <div className='my-8 rounded-md border p-4 shadow'>
        <h3>Colors</h3>
        <div className='flex flex-wrap items-center space-x-4'>
          <p className='flex w-32 items-center justify-center rounded-lg p-2 shadow-sm'>
            primary:
          </p>
          <div className='h-16 w-16 bg-primary-100'></div>
          <div className='h-16 w-16 bg-primary-200'></div>
          <div className='h-16 w-16 bg-primary-300'></div>
          <div className='h-16 w-16 bg-primary-400'></div>
          <div className='h-16 w-16 bg-primary-500'></div>
          <div className='h-16 w-16 bg-primary-600'></div>
          <div className='h-16 w-16 bg-primary-700'></div>
          <div className='h-16 w-16 bg-primary-800'></div>
          <div className='h-16 w-16 bg-primary-900'></div>
        </div>

        <div className='mt-4 flex flex-wrap items-center space-x-4'>
          <p className='flex w-32 items-center justify-center rounded-lg p-2 shadow-sm'>
            secondary:
          </p>
          <div className='h-16 w-16 bg-secondary-100'></div>
          <div className='h-16 w-16 bg-secondary-200'></div>
          <div className='h-16 w-16 bg-secondary-300'></div>
          <div className='h-16 w-16 bg-secondary-400'></div>
          <div className='h-16 w-16 bg-secondary-500'></div>
          <div className='h-16 w-16 bg-secondary-600'></div>
          <div className='h-16 w-16 bg-secondary-700'></div>
          <div className='h-16 w-16 bg-secondary-800'></div>
          <div className='h-16 w-16 bg-secondary-900'></div>
        </div>

        <div className='mt-4 flex flex-wrap items-center space-x-4'>
          <p className='flex w-32 items-center justify-center rounded-lg p-2 shadow-sm'>
            tertiary:
          </p>
          <div className='h-16 w-16 bg-tertiary-100'></div>
          <div className='h-16 w-16 bg-tertiary-200'></div>
          <div className='h-16 w-16 bg-tertiary-300'></div>
          <div className='h-16 w-16 bg-tertiary-400'></div>
          <div className='h-16 w-16 bg-tertiary-500'></div>
          <div className='h-16 w-16 bg-tertiary-600'></div>
          <div className='h-16 w-16 bg-tertiary-700'></div>
          <div className='h-16 w-16 bg-tertiary-800'></div>
          <div className='h-16 w-16 bg-tertiary-900'></div>
        </div>

        <div className='mt-4 flex flex-wrap items-center space-x-4'>
          <p className='flex w-32 items-center justify-center rounded-lg p-2 shadow-sm'>
            quaternary:
          </p>
          <div className='h-16 w-16 bg-quaternary-100'></div>
          <div className='h-16 w-16 bg-quaternary-200'></div>
          <div className='h-16 w-16 bg-quaternary-300'></div>
          <div className='h-16 w-16 bg-quaternary-400'></div>
          <div className='h-16 w-16 bg-quaternary-500'></div>
          <div className='h-16 w-16 bg-quaternary-600'></div>
          <div className='h-16 w-16 bg-quaternary-700'></div>
          <div className='h-16 w-16 bg-quaternary-800'></div>
          <div className='h-16 w-16 bg-quaternary-900'></div>
        </div>

        <div className='mt-4 flex flex-wrap items-center space-x-4'>
          <p className='flex w-32 items-center justify-center rounded-lg p-2 shadow-sm'>
            neutral:
          </p>
          <div className='h-16 w-16 border bg-neutral-0'></div>
          <div className='h-16 w-16 border bg-neutral-50'></div>
          <div className='h-16 w-16 border bg-neutral-100'></div>
          <div className='h-16 w-16 bg-neutral-200'></div>
          <div className='h-16 w-16 bg-neutral-300'></div>
          <div className='h-16 w-16 bg-neutral-400'></div>
          <div className='h-16 w-16 bg-neutral-500'></div>
          <div className='h-16 w-16 bg-neutral-600'></div>
          <div className='h-16 w-16 bg-neutral-700'></div>
          <div className='h-16 w-16 bg-neutral-800'></div>
          <div className='h-16 w-16 bg-neutral-900'></div>
        </div>

        <div className='mt-4 flex flex-wrap items-center space-x-4'>
          <p className='flex w-32 items-center justify-center rounded-lg p-2 shadow-sm'>
            content:
          </p>
          <div className='bg-content-50 h-16 w-16 border'></div>
          <div className='bg-content-100 h-16 w-16 border'></div>
          <div className='bg-content-200 h-16 w-16'></div>
          <div className='bg-content-300 h-16 w-16'></div>
          <div className='bg-content-400 h-16 w-16'></div>
          <div className='bg-content-500 h-16 w-16'></div>
          <div className='bg-content-600 h-16 w-16'></div>
          <div className='bg-content-700 h-16 w-16'></div>
          <div className='bg-content-800 h-16 w-16'></div>
          <div className='bg-content-900 h-16 w-16'></div>
        </div>
      </div>

      <SampleButtons />
    </main>
  )
}

export default SampleBlock
