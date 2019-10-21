import Header from '../components/header'

const baseLayout = Page => {
    return () => (
        <div>
            <Header />
            <main className="container">
                <Page />
            </main>
        </div>
    )
  }
  
  export default baseLayout