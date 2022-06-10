import React,{useState,useEffect} from 'react'
import { Layout } from '../components/Layout'
import { BodyContainer, ButtonContainer, Date, DescriptionContainer, ItemContainer, ItemsContainer, PageNumberContainer, TitleTodo } from './Page Components/ShowEventsElements'
import ReactPaginate from 'react-paginate';
import { StyledButtonDelete } from './Page Components/Components/Button/ButtonElement';


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const ButtonThemeDelete = {
  buttonColorFirst: "#941010",
  buttonColorSecond:"#E72323"
};
   
const ShowEvents = () => {
  
  const [hover, setHover] = useState(true);
  const [clicked,setClicked] = useState(true);

  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }



  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])

  const itemsPerPage = numItems();

  function numItems(){

    let items  = 3

    if(windowDimension.winWidth <600){
      items = 1;
    }
    else if(windowDimension.winWidth < 1220 && windowDimension.winWidth >= 600){
      items = 2;
    }

    else return 3;
    return items;
  }


  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  

       
  const DeleteTodo = (id)=>{
    console.log(id)
  } 
  

    return (
        <div style = {{display:"flex"}}>
            <Layout name={"Yusuf"}></Layout>
            <BodyContainer>
                <PageNumberContainer>
                <ReactPaginate
                   previousLabel="Previous"
                   nextLabel="Next"
                   pageClassName="page-item"
                   onPageChange={handlePageClick}
                   pageLinkClassName="page-link"
                   previousClassName="page-item"
                   previousLinkClassName="page-link"
                   nextClassName="page-item"
                   nextLinkClassName="page-link"
                   breakLabel="..."
                   breakClassName="page-item"
                   breakLinkClassName="page-link"
                   pageCount={pageCount}
                   marginPagesDisplayed={2}
                   pageRangeDisplayed={5}
                   containerClassName="pagination"
                   activeClassName="active"  
                />
                </PageNumberContainer>
                
                <ItemsContainer numofitems = {itemsPerPage}>
          {currentItems &&
            currentItems.map((item) => (
              <ItemContainer onClick={() => {setClicked(!clicked)}} onMouseEnter={() => setHover(true) } onMouseLeave={()=> setHover(false)} key ={item} numofitems = {itemsPerPage} importance = {"normal"}>
                
                
                {hover  && clicked && 
                <DescriptionContainer hover = {hover}>
                <TitleTodo > Title Of Events</TitleTodo>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla erat odio, vel aliquam neque fringilla ultricies. Quisque semper cursus nisi, vel posuere leo tincidunt nec. In nisl lacus, accumsan non porttitor sit amet, elementum id li</p>
                </DescriptionContainer>}

               {!clicked && 
               
               <DescriptionContainer>
               <Date><p>Starting Date:16-04-2020</p></Date>
               <Date><p>Ending Date:24-04-2020</p></Date>
            
               <ButtonContainer>
                  <StyledButtonDelete ButtonTheme = {ButtonThemeDelete} onClick ={() => DeleteTodo(2)}>Delete Todo</StyledButtonDelete>
                </ButtonContainer>
               </DescriptionContainer>
               
               }
              </ItemContainer>             
            ))}
        </ItemsContainer>

            </BodyContainer>
            
        </div>
    )
}

export default ShowEvents