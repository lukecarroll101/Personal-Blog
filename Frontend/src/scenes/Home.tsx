import Navbar from "../components/Navbar";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  a11yDark,
  anOldHope,
  dark,
  docco,
  vs2015,
  xt256,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect, useState } from "react";

function Home() {
  const myScript = `library("readr"); library("dplyr"); library("psych")
library("gdata");library("lavaan");library("broom")
library("rlang"); library("ltm"); library("lm.beta")
library("ggplot2"); source("score-tests.R")

wccases <- read_csv("ccases-export.csv")
mlist <- c("swl", "panas", "pwb", "hexaco")
for (i in mlist){
  meta_i <- read.xls("meta.xls", sheet = i)
  assign(paste("meta_", i, sep = ""), meta_i)
  remove(meta_i)
}
meta_pwb <- meta_pwb[!is.na(meta_pwb$ryff42itemnumber),]

v <- list()
v$demographic_items <- scan("test.txt", what='', sep=",")
v$swl_items <- meta_swl$id
v$panasItems_pa <- meta_panas$id[meta_panas$subscale == "pa"]
v$panasItems_na <- meta_panas$id[meta_panas$subscale == "na"]
v$pwb_items <- meta_pwb$id
v$wellbeing_items <- c(v$swl_items, v$panasItems_pa, v$panasItems_na, v$pwb_items)
v$intelligence <- c("intelligence","verbal" ,"abstract" ,"numeric") # intelligence data starts back as far as 2011.
`;

  return (
    <>
      <Navbar />
      <div className="grid-container-min">
        <div
          className="left-panel bg-white"
          style={{
            borderRadius: "10px",
          }}
        >
          <h1 className="px-5">Luke Carroll</h1>{" "}
          <div className="vl" style={{ marginRight: "40px" }}></div>
        </div>
        <div className="right-panel">
          <div className="mx-3 my-5">
            <h1>About Me</h1>
            <p>
              Also this is the home page- for dev. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus orci mi, venenatis ac nisl
              vel, porta consequat augue. In quis nulla odio. Integer vel
              tristique nisl. Vivamus sed urna ligula. Nullam in orci lacus.
              Maecenas eget nulla ut ex gravida gravida id non odio. Curabitur
              lacus erat, egestas ac nisl ut, lacinia scelerisque massa. Nam
              viverra ligula nunc, vel venenatis eros hendrerit eget. Curabitur
              posuere semper sem ut tincidunt. Donec turpis velit, viverra sed
              tempor eu, dapibus non eros. Ut in finibus leo. Maecenas sit amet
              varius felis. Ut massa eros, porta in tempus et, porttitor a
              turpis. Aliquam erat volutpat. Etiam pellentesque sagittis massa,
              eu pellentesque ipsum. Aenean euismod tristique neque, vitae
              pharetra tortor vestibulum interdum. Phasellus id augue ante. Sed
              porta sit amet lacus sit amet laoreet. Fusce ut lorem dolor. Donec
              placerat orci nibh, vel tincidunt lacus lacinia quis. Nullam sem
              leo, interdum in justo ut, elementum sodales felis. In ac dolor
              sem. Cras eget erat tortor. Phasellus justo metus, mollis ut
              tincidunt gravida, sodales at nulla. Fusce in neque neque. Proin
              non pretium odio, id mattis lorem. Ut quis dolor purus. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur laoreet purus in fringilla luctus. Aenean
              sollicitudin ex nec facilisis molestie. Donec non nibh mattis,
              maximus eros in, cursus purus. Curabitur accumsan quam vitae
              sapien ultricies dapibus. In scelerisque gravida lectus, sed
              tristique leo tempor ut. Suspendisse molestie et metus vitae
              posuere. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Donec eget sapien diam. Proin
              tempor suscipit leo, vitae tempor velit posuere hendrerit. Nam a
              odio molestie lacus vehicula semper sit amet eget lacus.
              Pellentesque nisl purus, ultricies ac risus ut, facilisis sagittis
              purus. Mauris tincidunt suscipit erat, id rutrum ipsum posuere
              nec. Pellentesque fringilla, eros interdum eleifend aliquet, lacus
              libero egestas lorem, in maximus mi tortor id augue. Vivamus
              rhoncus convallis ipsum, at varius nisl cursus a. Quisque
              hendrerit nisl quis sapien posuere, vel vulputate magna interdum.
            </p>
          </div>
        </div>
      </div>
      <div className="p-3 ">
        <div className="" style={{ borderRadius: "10px" }}>
          <SyntaxHighlighter language="r" style={anOldHope}>
            {myScript}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

export default Home;
