import GridLoader from "react-spinners/GridLoader";

export default function Loader() {
  return <>
    <div id="loader">
      <GridLoader size={15} margin={2} color="#fff" css={{ display: "block"}}/>
    </div>

    <style jsx>
      {`
          #loader {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 45vh;
          }
        `}
    </style>
  </>
}