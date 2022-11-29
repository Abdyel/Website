function calculate() {
    let conv = -1;
    var e = document.getElementById("typeOil");
    let inch = document.getElementById("inch");
    switch(e.value) {
      case "1":
        conv = 48;
        document.getElementById("answer").innerHTML = "this is 5w30 Conv"
        break;
      case "2":
        switch(inch.value){
            case "1":
                conv = (2*4);
            break;
            case 2:
                conv = (5*4);
            break;
            case 3:
                conv = (9*4);
            break;
            case 4:
                conv = (14*4);
            break;
            case 5:
                conv = (19*4);
            break;
            case 6:
                conv = (25*4);
            break;
            case 7:
                conv = (31*4);
            break;
            case 8:
                conv = (38*4);
            break;
            case 9:
                conv = (44*4);
            break;
            case 10:
                conv = (51*4);
            break;
            case 11:
                conv = (58*4);
            break;
            case 12:
                conv = (65*4);
            break;
            case 13:
                conv = (72*4);
            break;
            case 14:
                conv = (79*4);
            break;
            case 15:
                conv = (86*4);
            break;
            case 16:
                conv = (94*4);
            break;
            case 17:
                conv = (101*4);
            break;
            case 18:
                conv = (108*4);
            break;
            case 19:
                conv = (115*4);
            break;
            case "20":
                conv = (122*4);
            break;
            case 21:
                conv = (129*4);
            break;
            case 22:
                conv = (136*4);
            break;
            case 23:
                conv = (143*4);
            break;
            case 24:
                conv = (151*4);
            break;
            case 25:
                conv = (158*4);
            break;
            case 26:
                conv = (165*4);
            break;
            case 27:
                conv = (172*4);
            break;
            case 28:
                conv = (179*4);
            break;
            case 29:
                conv = (186*4);
            break;
            case 30:
                conv = (193*4);
            break;
            case 31:
                conv = (200*4);
            break;
            case 32:
                conv = (207*4);
            break;
            case 33:
                conv = (214*4);
            break;
            default:
                conv = -1;
        }
        inch = 1;
        document.getElementById("answer").innerHTML = "this is 5w30 Max"
        break;
      case "3":
        conv = 24.6;
        document.getElementById("answer").innerHTML = "this is 5w30 FulSyn"
        break;
      case "4":
        conv = 48;
        document.getElementById("answer").innerHTML = "this is 5w20 Conv"
        break;
      case "5":
        conv = 20.2;
        document.getElementById("answer").innerHTML = "this is 5w20 Maxlife"
        break;
      case "6":
        conv = 1.5385;
        document.getElementById("answer").innerHTML = "this is a 5 Gallon bucket"
        break;
      case "7":
        conv = 6.47
        document.getElementById("answer").innerHTML = "this is a 55 Gallon drum"
        break;
      case "8":
         conv = 24.6;
         document.getElementById("answer").innerHTML = "this is Maxlife ATF"
         break;
      default:
    }
    if(conv == -1)
        document.getElementById("quart").innerHTML = "Please Select a Product or enter valid Measurement";
    else if (e.value == "2")
        document.getElementById("quart").innerHTML = (inch*conv) + " Qts";
    else
        document.getElementById("quart").innerHTML = (inch.value*conv) + " Qts";
}
