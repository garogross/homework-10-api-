import React,{useState,useCallback,useEffect} from "react"
import './App.css';
import Form from "./Components/Form/Form"
import ImgList from "./Components/ImgList/ImgList"
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";


function App() {
  const [imgData,setImgData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading,setIsLoading] = useState(false)

  const key = "1J1nly0zBrrMc2SvD0h47avXm7yYS9QhBo7eTWej7jE"
  const fetchHandler = useCallback( async (value) => {
    setIsLoading(true)
    try {
      const response =  await fetch(`https://api.unsplash.com/search/collections?page=1&query=${!value ? "images" : value}&client_id=${key}`)
      console.log(response)
      if (!response.ok) {
        throw new Error("something went wrong")
      }
      const data = await response.json()
      const myData = data.results.map(item => {
        return {
          id: item.cover_photo.id,
          url: item.cover_photo.urls.regular,
          alt: item.cover_photo.alt_description
        }
      })
      setImgData(myData)
    } catch (error) {
      console.log("aaa")
      setError(error.message)
    }
    setIsLoading(false)

  },[])

  useEffect(() => {
    fetchHandler()
  },[fetchHandler])
  

  let content = <p>Something went wrong</p>
  if (error) {
  content = <p>{error}</p>
  }
  if (isLoading) {
  content = <LoadingSpinner />
  }
  if (imgData.length > 0 && !isLoading) {
  content = <ImgList imgData={imgData}/>
  }
  return (
  
    <div className="App" >
      <Form
        fetchHandler={fetchHandler}
      />
      {content}
    </div>
  );
}

export default App;
