function Func() {
    var rating1 = {
    "match": 1,
    "children": [
      {
        "group": 1,
        "start": 110,
        "end": 111,
        "value": "1"
      },
      {
        "group": 2,
        "start": 112,
        "end": 114,
        "value": "23"
      },
      {
        "group": 3,
        "start": 115,
        "end": 131,
        "value": "October 10, 2012"
      },
      {
        "group": 4,
        "start": 132,
        "end": 144,
        "value": "May 15, 2013"
      },
      {
        "group": 5,
        "start": 145,
        "end": 148,
        "value": "119"
      },
      {
        "group": 6,
        "start": 149,
        "end": 153,
        "value": "3.68"
      }
    ]
  };
  var rating2 =  {
    "match": 2,
    "children": [
      {
        "group": 1,
        "start": 158,
        "end": 159,
        "value": "2"
      },
      {
        "group": 2,
        "start": 160,
        "end": 162,
        "value": "23"
      },
      {
        "group": 3,
        "start": 163,
        "end": 178,
        "value": "October 9, 2013"
      },
      {
        "group": 4,
        "start": 179,
        "end": 191,
        "value": "May 14, 2014"
      },
      {
        "group": 5,
        "start": 192,
        "end": 195,
        "value": "128"
      },
      {
        "group": 6,
        "start": 196,
        "end": 200,
        "value": "3.28"
      }
    ]
  };
    var rating3 =  {
    "match": 3,
    "children": [
      {
        "group": 1,
        "start": 205,
        "end": 206,
        "value": "3"
      },
      {
        "group": 2,
        "start": 207,
        "end": 209,
        "value": "23"
      },
      {
        "group": 3,
        "start": 210,
        "end": 225,
        "value": "October 8, 2014"
      },
      {
        "group": 4,
        "start": 226,
        "end": 238,
        "value": "May 13, 2015"
      },
      {
        "group": 5,
        "start": 239,
        "end": 242,
        "value": "111"
      },
      {
        "group": 6,
        "start": 243,
        "end": 247,
        "value": "3.52"
      }
    ]
  };
 var rating4 =  {
    "match": 4,
    "children": [
      {
        "group": 1,
        "start": 252,
        "end": 253,
        "value": "4"
      },
      {
        "group": 2,
        "start": 254,
        "end": 256,
        "value": "23"
      },
      {
        "group": 3,
        "start": 260,
        "end": 275,
        "value": "October 7, 2015"
      },
      {
        "group": 4,
        "start": 276,
        "end": 288,
        "value": "May 25, 2016"
      },
      {
        "group": 5,
        "start": 289,
        "end": 292,
        "value": "113"
      },
      {
        "group": 6,
        "start": 293,
        "end": 297,
        "value": "3.34"
      }
    ]
  };
    var x1 = document.getElementsByClassName("rating1");
    var x2 = document.getElementsByClassName("rating2");
    var x3 = document.getElementsByClassName("rating3");
    var x4 = document.getElementsByClassName("rating4");
    for (var i = 0; i < rating1.children.length; i++) {
        x1[i].innerHTML = rating1.children[i].value;
        x2[i].innerHTML = rating2.children[i].value;
        x3[i].innerHTML = rating3.children[i].value;
        x4[i].innerHTML = rating4.children[i].value;
    }
}