import GridLoader from "react-spinners/GridLoader";

export default function Loader({msg}) {
  return <>
    <div id="loader">
      {msg && <h2>{msg}</h2>}
      <br/>
      <GridLoader size={15} margin={2} color="#fff" css={{ display: "block"}}/>
    </div>

    <style jsx>
      {`
          #loader {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 45vh;
          }
        `}
    </style>
  </>
}