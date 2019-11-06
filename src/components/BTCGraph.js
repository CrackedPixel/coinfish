import React, {useEffect, useState} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CircularProgress from '@material-ui/core/CircularProgress';

const BTCGraph = () => {
  const [BTCData, setBTCData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const BTCObject = [];

  useEffect(() => {
    fetch ("https://api.coindesk.com/v1/bpi/historical/close")
    .then(response => response.json())
    .then((data) => {
      setBTCData(data.bpi);
      setIsLoaded(true);
    })
    .then(() =>{
      setTimeout(() => {
        setShowChart(true);
      }, 1500)
    })
  }, []);

  const loadingBar = <section ClassName="section__main"><CircularProgress className="chartProgress"/></section>;

  if (!isLoaded || !showChart) return loadingBar;

  let onlyKeys = Object.keys(BTCData);
  let onlyPrices = [];
  let nCnt = 0;
  for (let nVal in BTCData){
    onlyPrices.push(BTCData[nVal]);
    BTCObject.push({
      "stamp": onlyKeys[nCnt],
      "value": onlyPrices[nCnt]
    });
    nCnt++;
  }

  let sPrices = onlyPrices.slice(0).sort();
  const minP = sPrices[0]*0.95;
  const maxP = sPrices[sPrices.length-1] + 100;
  const bNum = maxP - minP;
  const wMultiplier = 500 / (sPrices.length-1);

  const normalizeNumber = (num) => {
    let rtnVal = (num - minP) / bNum;
    return rtnVal * 100;
  }

  const renderPoints = BTCObject.map((item, i) => {
    return `${i*wMultiplier}, ${normalizeNumber(item.value)}`;
  })




  return (
    <article className="page__inside">
      <section className="section__main">
        <h1>BTC Chart</h1>
        <svg viewBox="0 0 500 150" className="chart">
          <polyline
            fill="none"
            stroke="#0074d9"
            strokeWidth="5"
            points={renderPoints}
          />
        </svg>
      </section>
      <section className="section__main">
        <Paper className="chartPaper">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              BTCObject.map((row, i) => {
                return (
                <TableRow key={i} className="chartRow"> 
                  <TableCell className="chartCell" component="th" scope="row">{row.stamp}</TableCell>
                  <TableCell className="chartCell" align="right">{row.value.toFixed(4)}</TableCell>
                </TableRow>
                )
              })
            }
            </TableBody>
          </Table>
        </Paper>
      </section>
    </article>
  )
}

export default BTCGraph;
