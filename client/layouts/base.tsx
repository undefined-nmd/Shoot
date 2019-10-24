import Header from '../components/header'

const BaseLayout = Page => {
    return () => (
        <div>
            <Header />
            <main className="container">
                <Page />
            </main>
        </div>
    )
  }
  
  export default BaseLayout