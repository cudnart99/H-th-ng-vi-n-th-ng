import React, { useState } from "react";
import { InputNumber } from "antd";
export default function HTVT() {
  const [count11, setCount11] = useState(0);
  const [count12, setCount12] = useState(0);
  const [count13, setCount13] = useState(0);

  var count = 1;
  var ds11 = [];
  var ds12 = [];
  var ds13 = [];
  while (count < count11 + 1) {
    ds11.push(count);
    count++;
  }
  while (count < count11 + count12 + 1) {
    ds12.push(count);
    count++;
  }
  while (count < count11 + count12 + count13 + 1) {
    ds13.push(count);
    count++;
  }

  var n11, n12, n13, n21, n22, n23, n31, n32, n33;
  var ds21 = [];
  var ds22 = [];
  var ds23 = [];
  var ds31 = [];
  var ds32 = [];
  var ds33 = [];
  var ds41 = [];
  var ds42 = [];
  var ds43 = [];
  var ds51 = [];
  var ds52 = [];
  var ds53 = [];
  var ds61 = [];
  var ds62 = [];
  var ds63 = [];

  const Inhangdoi = (q, i, j) => {
    const hangdoi = q.map((item) => {
      return <th>{item}</th>;
    });

    const paddingArray = [];
    while (paddingArray.length < 7 - q.length) {
      paddingArray.push("");
    }
    const padding = paddingArray.map((item) => {
      return <th className="padding-block">{item}</th>;
    });

    return (
      <>
        <div className="contain">
          <div className="title">
            Hàng đợi {i}
            {j} :
          </div>
          <table className="table">
            <tbody>
              <tr>
                {hangdoi} {padding}
              </tr>
            </tbody>
          </table>
          <div>{"=>"}</div>
          {kiemTraVaCham(q, i, j)}
        </div>
      </>
    );
  };
  const Doihangcho = (q1, q2, q3, n, i, j) => {
    for (let i = 0; i < parseInt(n / 2); i++) {
      q2.push(q1[0]);
      q1.shift();
    }
    for (let i = parseInt(n / 2); i < n; i++) {
      q3.push(q1[0]);
      q1.shift();
    }
  };
  const kiemTraVaCham = (q, i, j) => {
    if (q.length > 1) {
      return (
        <div>
          Hàng đợi {i}
          {j} xảy ra va chạm
        </div>
      );
    } else {
      {
        /* {q.length && (
            <span>
              {" =>"} tín hiệu {q[0]} được đưa vào DTQ
            </span>
          )} */
      }
      return (
        <>
          {q.length ? (
            <div>
              Hàng đợi {i}
              {j} không xảy ra va chạm {" =>"} tín hiệu {q[0]} được đưa vào DTQ
            </div>
          ) : (
            <div>
              Hàng đợi {i}
              {j} không xảy ra va chạm
            </div>
          )}
        </>
      );
    }
  };
  n11 = ds11.length;
  n12 = ds12.length;
  n13 = ds13.length;

  const PhanTanHangDoi1 = () => {
    if (n11 > 1 && n12 < 2 && n13 > 1) {
      if (n11 === 2) {
        Doihangcho(ds11, ds21, ds23, n11, 1, 1);
      } else if (n11 > 2) {
        Doihangcho(ds11, ds21, ds22, n11, 1, 1);
      }
      if (n13 === 2) {
        Doihangcho(ds13, ds31, ds33, n13, 1, 3);
      } else if (n13 > 2) {
        Doihangcho(ds13, ds31, ds32, n13, 1, 3);
      }
    }
    if (n11 < 2 && n12 > 1 && n13 < 2) {
      if (n12 === 2) {
        Doihangcho(ds12, ds21, ds23, n12, 1, 2);
      } else {
        Doihangcho(ds12, ds21, ds22, n12, 1, 2);
      }
    }
    if (n11 > 1 && n12 < 2 && n13 < 2) {
      if (n11 === 2) {
        Doihangcho(ds11, ds21, ds23, n11, 1, 1);
      } else {
        Doihangcho(ds11, ds21, ds22, n11, 1, 1);
      }
    }
    if (n11 > 1 && n12 > 1 && n13 < 2) {
      if (n11 === 2) {
        Doihangcho(ds11, ds21, ds23, n11, 1, 1);
      } else if (n11 > 2) {
        Doihangcho(ds11, ds21, ds22, n11, 1, 1);
      }
      if (n12 === 2) {
        Doihangcho(ds12, ds31, ds33, n12, 1, 2);
      } else if (n12 > 2) {
        Doihangcho(ds12, ds31, ds32, n12, 1, 2);
      }
    }
    if (n11 > 1 && n12 > 1 && n13 > 1) {
      if (n11 === 2) {
        Doihangcho(ds11, ds21, ds23, n11, 1, 1);
      } else if (n11 > 2) {
        Doihangcho(ds11, ds21, ds22, n11, 1, 1);
      }
      if (n12 === 2) {
        Doihangcho(ds12, ds31, ds33, n12, 1, 2);
      } else if (n12 > 2) {
        Doihangcho(ds12, ds31, ds32, n12, 1, 2);
      }
      if (n13 === 2) {
        Doihangcho(ds13, ds41, ds43, n13, 1, 3);
      } else if (n13 > 2) {
        Doihangcho(ds13, ds41, ds42, n13, 1, 3);
      }
    }
    if (n11 < 2 && n12 > 1 && n13 > 1) {
      if (n12 === 2) {
        Doihangcho(ds12, ds21, ds23, n12, 1, 2);
      } else if (n12 > 2) {
        Doihangcho(ds12, ds21, ds22, n12, 1, 2);
      }
      if (n13 === 2) {
        Doihangcho(ds13, ds31, ds33, n13, 1, 3);
      } else if (n13 > 2) {
        Doihangcho(ds13, ds31, ds32, n13, 1, 3);
      }
    }
    if (n11 < 2 && n12 < 2 && n13 > 1) {
      if (n13 === 2) {
        Doihangcho(ds13, ds21, ds23, n13, 1, 3);
      } else if (n13 > 2) {
        Doihangcho(ds13, ds21, ds22, n13, 1, 3);
      }
    }
    ds11.shift();
    ds12.shift();
    ds13.shift();
  };

  const PhanTanHangDoi2 = (ds21, ds22, ds23, ds31, ds32, ds33) => {
    n21 = ds21.length;
    n22 = ds22.length;
    n23 = ds23.length;
    n31 = ds31.length;
    n32 = ds32.length;
    n33 = ds33.length;
    if ((n21 > 1 && n22 > 1 && n23 < 2) || n31 > 0 || n32 > 0 || n33 > 0) {
      Doihangcho(ds21, ds41, ds43, n21, 2, 1);
      Doihangcho(ds22, ds51, ds53, n22, 2, 2);
    } else if (
      (n21 > 1 && n22 < 2 && n23 < 2) ||
      n31 > 0 ||
      n32 > 0 ||
      n33 > 0
    ) {
      Doihangcho(ds21, ds41, ds43, n21, 2, 1);
      Doihangcho(ds22, ds51, ds53, n22, 2, 2);
    } else if (
      (n21 > 1 && n22 < 2 && n23 > 1) ||
      n31 > 0 ||
      n32 > 0 ||
      n33 > 0
    ) {
      Doihangcho(ds21, ds41, ds43, n21, 2, 1);
      Doihangcho(ds23, ds51, ds53, n23, 2, 3);
    } else if (
      (n21 < 2 && n22 > 1 && n23 < 2) ||
      n31 > 0 ||
      n32 > 0 ||
      n33 > 0
    ) {
      Doihangcho(ds22, ds41, ds43, n22, 2, 2);
    } else if (
      (n21 < 2 && n22 > 1 && n23 > 1) ||
      n31 > 0 ||
      n32 > 0 ||
      n33 > 0
    ) {
      Doihangcho(ds22, ds41, ds43, n23, 2, 2);
      Doihangcho(ds23, ds51, ds53, n23, 2, 3);
    } else if (
      (n21 < 2 && n22 < 2 && n23 > 1) ||
      n31 > 0 ||
      n32 > 0 ||
      n33 > 0
    ) {
      Doihangcho(ds23, ds41, ds43, n23, 2, 3);
    } else if (
      (n21 > 1 && n22 > 1 && n23 > 1) ||
      n31 > 0 ||
      n32 > 0 ||
      n33 > 0
    ) {
      Doihangcho(ds21, ds41, ds43, n21, 2, 1);
      Doihangcho(ds22, ds51, ds53, n22, 2, 2);
      Doihangcho(ds23, ds61, ds63, n23, 2, 3);
    } else if (
      (n21 > 1 && n22 < 2 && n23 < 2) ||
      n31 === 0 ||
      n32 === 0 ||
      n33 === 0
    ) {
      Doihangcho(ds21, ds31, ds33, n21, 2, 1);
    } else if (
      (n21 > 1 && n22 > 1 && n23 < 2) ||
      n31 === 0 ||
      n32 === 0 ||
      n33 === 0
    ) {
      Doihangcho(ds21, ds31, ds33, n21, 2, 1);
      Doihangcho(ds22, ds41, ds43, n22, 2, 2);
    } else if (
      (n21 > 1 && n22 < 2 && n23 > 1) ||
      n31 === 0 ||
      n32 === 0 ||
      n33 === 0
    ) {
      Doihangcho(ds21, ds31, ds33, n21, 2, 1);
      Doihangcho(ds23, ds41, ds43, n23, 2, 3);
    } else if (
      (n21 > 1 && n22 > 1 && n23 > 1) ||
      n31 === 0 ||
      n32 === 0 ||
      n33 === 0
    ) {
      Doihangcho(ds21, ds31, ds33, n21, 2, 1);
      Doihangcho(ds22, ds41, ds43, n22, 2, 2);
      Doihangcho(ds23, ds51, ds53, n23, 2, 3);
    } else if (
      (n21 < 2 && n22 > 1 && n23 < 2) ||
      n31 === 0 ||
      n32 === 0 ||
      n33 === 0
    ) {
      Doihangcho(ds22, ds31, ds33, n22, 2, 2);
    } else if (
      (n21 < 2 && n22 > 1 && n23 > 1) ||
      n31 === 0 ||
      n32 === 0 ||
      n33 === 0
    ) {
      Doihangcho(ds22, ds31, ds33, n22, 2, 2);
      Doihangcho(ds23, ds41, ds43, n23, 2, 3);
    } else if (
      (n21 < 2 && n22 < 2 && n23 > 1) ||
      n31 === 0 ||
      n32 === 0 ||
      n33 === 0
    ) {
      Doihangcho(ds23, ds31, ds33, n23, 2, 3);
    }
    ds21.shift();
    ds22.shift();
    ds23.shift();
  };

  return (
    <>
      <div className="main-title">
        Cơ chế chống xung đột tín hiệu bằng thuật toán hàng đợi phân tán
      </div>
      <div className="flex">
        <div>Nhập số tín hiệu ở hàng đợi 11 : </div>
        <div className="input">
          <InputNumber
            min={1}
            max={7}
            defaultValue={0}
            style={{
              width: 100,
            }}
            onChange={(value) => {
              setCount11(value);
            }}
          />
        </div>
      </div>
      <div className="flex">
        <div>Nhập số tín hiệu ở hàng đợi 12 : </div>
        <div className="input">
          <InputNumber
            min={1}
            max={7}
            defaultValue={0}
            style={{
              width: 100,
            }}
            onChange={(value) => {
              setCount12(value);
            }}
          />
        </div>
      </div>
      <div className="flex">
        <div>Nhập số tín hiệu ở hàng đợi 13 : </div>
        <div className="input">
          <InputNumber
            min={1}
            max={7}
            defaultValue={0}
            style={{
              width: 100,
            }}
            onChange={(value) => {
              setCount13(value);
            }}
          />
        </div>
      </div>
      <div>Các phần tử đã nhập ban đầu trong hàng đợi là : </div>
      {Inhangdoi(ds11, 1, 1)}
      {Inhangdoi(ds12, 1, 2)}
      {Inhangdoi(ds13, 1, 3)}
      {PhanTanHangDoi1()}
      <div>Sắp xếp hàng đợi lần 1 : </div>
      {Inhangdoi(ds21, 2, 1)}
      {Inhangdoi(ds22, 2, 2)}
      {Inhangdoi(ds23, 2, 3)}
      {Inhangdoi(ds31, 3, 1)}
      {Inhangdoi(ds32, 3, 2)}
      {Inhangdoi(ds33, 3, 3)}
      {PhanTanHangDoi2(ds21, ds22, ds23, ds31, ds32, ds33)}
      <div>Sắp xếp hàng đợi lần 2 : </div>
      {Inhangdoi(ds41, 4, 1)}
      {Inhangdoi(ds42, 4, 2)}
      {Inhangdoi(ds43, 4, 3)}
      {Inhangdoi(ds51, 5, 1)}
      {Inhangdoi(ds52, 5, 2)}
      {Inhangdoi(ds53, 5, 3)}
    </>
  );
}
