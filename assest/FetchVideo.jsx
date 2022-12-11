import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Download from '@material-ui/icons/GetApp';
import InstagramEmbed from 'react-instagram-embed';


const Outer = styled.div`
    border: solid 2px black ;
    max-width:900px;
    width:100% ;
    height:800px ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    flex-direction:column ;
    margin:auto;
    text-align:center ;
`;

const FormOuter = styled.div`
      width:100%;
        & form{
        display:flex ;
        align-items:center ;
        width:100%;
        justify-content:space-around ;
        /* border:solid 1px black; */
        height:200px ;
        flex-direction:column;
        }
     & .input{
       max-width:500px;
       width:88%;
     }
`;

const LinkSubmit = styled.div`
     width:100%;
`;



//video design start here

const VOuter = styled.div`
    /* border:solid 2px black ; */
    width:100% ;
    height:500px;
`;

const VBox = styled.div`
    border:solid 2px black ;
    width: 80% ;
    height:300px;
    margin: auto;
    border-radius:5px;
    margin-bottom:20px;
`;


function InputBox() {
  const [showVideo, setVideo] = useState('none');

  function VideoBox() {
    return (
      <>
      <InstagramEmbed
          url='https://www.instagram.com/p/Cd4hzZWPOeH/?utm_source=ig_web_copy_link'
          clientAccessToken='IGQVJXUnktYTZAvc0xpLWJITlZAySmE1bDVSMG01R0VHSFFJMEQ2aW40SHgzaExhZAXdXd0lHY2FDbWxqS05IUGdvTEpEZAm1ZAZAWExeXh1N01kZA1dZAVW9jSHJOWjVEOE9CcWw2M2NKU3g3ejVMdTd0aXREdwZDZD'
          maxWidth={480}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
/>
        <VOuter style={{ display: showVideo }}>
          <VBox>

          </VBox>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Download />}

          >
            Download
          </Button>
        </VOuter>
      </>
    )
  }
  return (
    <>
      <VideoBox />
      <FormOuter >
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Paste The Link Here" variant="outlined" className='input' />
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Download />}
            onClick={() => {
              setVideo('block')
            }}
          >
            Download
          </Button>
        </form>
      </FormOuter>
    </>
  );
}



export class FetchVideo extends React.Component {

  render() {

    return (
      <>
        <Outer>
          <h2>Instagram Reels Downloader</h2>
          <LinkSubmit>
            <InputBox />
          </LinkSubmit>
        </Outer>
      </>
    );
  }
}




