import React,{useEffect,useState} from 'react'
import { Layout } from '../components/Layout'
import { BodyContainer, ButtonContainer, Date, DescriptionContainer, HorizontalRule, ImageContainer, Importance, ItemContainer, ItemsContainer, PageNumberContainer, TitleTodo } from './Page Components/ListTodoElements'
import ReactPaginate from 'react-paginate';
import { StyledButtonDelete } from './Page Components/Components/Button/ButtonElement';


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const ButtonThemeDelete = {
  buttonColorFirst: "#941010",
  buttonColorSecond:"#E72323"
};


    function Items({ currentItems,numItems }) {
      return (
        <ItemsContainer numofitems = {numItems}>
          {currentItems &&
            currentItems.map((item) => (
              <ItemContainer key ={item} numofitems = {numItems}>
                <TitleTodo >Item {item}</TitleTodo>
                <Importance></Importance>
                <HorizontalRule/>
                <ImageContainer>


                </ImageContainer>

                <HorizontalRule/>
                <DescriptionContainer>
                  <p>JKNLns ŞSAM ASIQWK OSKAKF IJKMASG OAIH NJJABJ </p>
                </DescriptionContainer>

                <Date>
                  <p>13/08/2022</p>
                </Date>

                <Date>
                  <p>13/08/2022</p>
                </Date>

                <ButtonContainer>

                  <StyledButtonDelete ButtonTheme = {ButtonThemeDelete}>X</StyledButtonDelete>
                </ButtonContainer>
                
            

              </ItemContainer>             
            ))}
        </ItemsContainer>
      );
      
    }



export const ListTodo = () => {

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
                
                <Items currentItems={currentItems} numItems = {itemsPerPage} />

            </BodyContainer>
            
        </div>
    )
}
