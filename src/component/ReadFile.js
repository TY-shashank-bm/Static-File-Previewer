import React from "react";
import FileViewer from "react-file-viewer";
import "../App.css";
import Pdf from "../assets/OPERATORS.pdf";
import Doc from "../assets/React Example Assignment.docx";
import Xlsx from "../assets/file_example_XLSX_10.xlsx"
export default class ReadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      show: false,
      fileType: "",
      type: "",
      pdfShow:false,
      docShow:false,
      xlShow:false,
    };
  }
  render() {
    let fil = new File(["OPERATORS"], "Pdf", { type: "application/pdf" });
    let xls = new File(["Sheet"], "Xlsx",{type: "xlsx"})
    let doc = new File(["React Example Assignment"], "Document", {
      type: "document",
    });
    let inLine;
    this.state.display
      ? (inLine = {
          // height: "500vh",
          backgroundColor: "rgba(0,0,0,0.8) ",
          paddingTop: "100px",
        })
      : (inLine = {
          // height: "500vh",
          backgroundColor: "rgba(0,0,0,0) ",
          paddingTop: "100px",
        });
    return (
      <>
      <div id="nav">
  File Previewer
</div>

        <div style={inLine}>
          <table style={{ marginLeft: "30%"}} id="table_info">
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th>Name</th>
                <th>Size</th>
                <th>type</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{fil.name}</td>
                <td>{fil.size}</td>
                <td>{fil.type}</td>
                <td>
                  <button id="viewFile"
                    onClick={() =>
                      this.setState({ pdfShow: true, docShow: false ,xlShow: false})
                    }
                  >
                    <i className="far fa-eye"/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>{doc.name}</td>
                <td>{doc.size}</td>
                <td>{doc.type}</td>
                <td>
                  <button id="viewFile"
                    onClick={() =>
                      this.setState({ pdfShow: false, docShow: true ,xlShow: false})
                    }
                  >
                    <i className="far fa-eye"/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>{xls.name}</td>
                <td>{xls.size}</td>
                <td>{xls.type}</td>
                <td>
                  <button id="viewFile"
                    onClick={() =>
                      this.setState({ pdfShow: false, docShow: false ,xlShow: true})
                    }
                  >
                    <i className="far fa-eye"/>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {this.state.pdfShow ? (
            <>
              <div id="myModal" className="modal">
                <div className="modal-content">
                  <button
                    id="close"
                    onClick={() =>
                      this.setState({ pdfShow: !this.state.pdfShow })
                    }
                    style={{ marginLeft: "97%" }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <div
                    id="fileContent"
                    style={{ width: "100%", height: "500px" }}
                  >
                    <FileViewer fileType="pdf" filePath={Pdf} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {this.state.docShow ? (
            <>
              <div id="myModal" className="modal">
                <div className="modal-content">
                  <button
                    id="close"
                    onClick={() =>
                      this.setState({ docShow: !this.state.docShow })
                    }
                    style={{ marginLeft: "97%" }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <div
                    id="fileContent"
                    style={{ width: "100%", height: "500px" }}
                  >
                    <FileViewer fileType="docx" filePath={Doc} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {this.state.xlShow ? (
            <>
              <div id="myModal" className="modal">
                <div className="modal-content">
                  <button
                    id="close"
                    onClick={() =>
                      this.setState({ xlShow: !this.state.xlShow })
                    }
                    style={{ marginLeft: "97%" }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <div
                    id="fileContent"
                    style={{ width: "100%", height: "500px" }}
                  >
                    <FileViewer fileType="xlsx" filePath={Xlsx} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}
