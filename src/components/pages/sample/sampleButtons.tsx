import Button from '@/components/ui/button'

const SampleButtons = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <Button size='large'>primary large </Button>
      <Button>Primary medium</Button>
      <Button size='small'>primary small</Button>
      <Button loading>Primary medium</Button>
      <Button intent='secondary' size='large'>
        secondary large{' '}
      </Button>
      <Button intent='secondary'>secondary medium</Button>{' '}
      <Button intent='secondary' loading>
        secondary medium
      </Button>
      <Button intent='secondary' size='small'>
        secondary small
      </Button>
      <Button intent='neutral' size='large'>
        neutral large
      </Button>
      <Button intent='neutral'>neutral medium</Button>
      <Button intent='neutral' loading>
        neutral medium
      </Button>
      <Button intent='neutral' size='small'>
        neutral small
      </Button>
      <Button intent='primary' modifier='outline'>
        primary outline
      </Button>
      <Button intent='secondary' modifier='outline'>
        secondary outline
      </Button>
      <Button intent='neutral' modifier='outline'>
        neutral outline
      </Button>
      <Button modifier='ghost'>Primary ghost</Button>
      <Button intent='secondary' modifier='ghost'>
        secondary ghost
      </Button>
      <Button intent='neutral' modifier='ghost'>
        neutral ghost
      </Button>
    </div>
  )
}

export default SampleButtons
