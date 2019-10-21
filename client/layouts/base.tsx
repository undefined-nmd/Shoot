import Header from '../components/header'

const baseLayout = Page => {
    return () => (
      <main className="container-fluid">
        <div className="row">
            <Header />
        </div>
        <Page />
      </main>
    )
  }
  
  export default baseLayout