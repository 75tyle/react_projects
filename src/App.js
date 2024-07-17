import "./App.css";
import Accordian from "./components/accordian";
import TabTest from "./components/custom tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      {/* <StarRating /> */}

      {/* Image slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"4"}
      /> */}

      {/* Load more products component*/}
      {/* <LoadMoreData /> */}

      {/* Tree view component / menu UI component / recursive navigation component  */}
      {/* <TreeView menus={menus}/> */}

      {/* QR code genrator*/}
      {/* <QRCodeGenerator /> */}

      {/* Light Dark Theme Mode */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
      
      {/* Custom tab component */}
      {/* <TabTest/> */}

      {/* Custom Modal Popup component*/}
      {/* <ModalTest/> */}

      {/* Github Profile Finder */}
      <GithubProfileFinder/>
    </div>
  );
}

export default App;
