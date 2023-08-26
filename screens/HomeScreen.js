import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <View style={styles.homeScreenChild} />
      <View style={styles.homeScreenItem} />
      <Image
        style={[styles.homeScreenInner, styles.mainButtonPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-34624423.png")}
      />
      <Image
        style={styles.blueDoctorHealthDayFaceboo}
        resizeMode="cover"
        source={require("../assets/blue-doctor-health-day-facebook-cover-1.png")}
      />
      <View style={styles.component1}>
        <Image
          style={[styles.userIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/user-icon1.png")}
        />
        <Image
          style={styles.bellIcon}
          resizeMode="cover"
          source={require("../assets/bell-icon1.png")}
        />
        <View style={styles.component1Child} />
        <Image
          style={[styles.searchIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/search1.png")}
        />
        <Text style={styles.searchForMedicine}>Search for medicine</Text>
        <View style={styles.component1Inner}>
          <View style={[styles.rectangleParent, styles.groupParentPosition]}>
            <View style={[styles.groupChild, styles.groupParentPosition]} />
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
        </View>
        <View style={styles.groupView}>
          <View style={[styles.rectangleParent, styles.groupParentPosition]}>
            <Image
              style={[styles.heganIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/hegan1.png")}
            />
            <View style={[styles.ellipseParent, styles.groupParentPosition]}>
              <Image
                style={[styles.groupItem, styles.groupParentPosition]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Text style={styles.r}>R</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.mainButton, styles.mainButtonPosition]}
        resizeMode="cover"
        source={require("../assets/main-button.png")}
      />
      <View style={styles.product3Parent}>
        <View style={styles.product3}>
          <Text style={styles.home}>Home</Text>
          <Text style={[styles.wishlist, styles.cartTypo]}>Wishlist</Text>
          <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
        </View>
        <Text style={[styles.support, styles.cartTypo]}>Support</Text>
        <Text style={[styles.account, styles.cartTypo]}>Account</Text>
      </View>
      <Text style={[styles.shopByFormulation, styles.specialOfferTypo]}>
        Shop By Formulation
      </Text>
      <Text style={[styles.viewAll, styles.viewTypo]}>View All</Text>
      <Image
        style={[styles.rectangleIcon, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={styles.mediproduct6RemovebgPreviewIcon}
        resizeMode="cover"
        source={require("../assets/mediproduct-6removebgpreview-1.png")}
      />
      <Text
        style={[styles.paracetamol, styles.paracetamolTypo]}
      >{`Paracetamol `}</Text>
      <View style={styles.product10}>
        <Image
          style={[styles.product10Child, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Image
          style={[
            styles.mediproduct6RemovebgPreviewIcon1,
            styles.mediproduct6IconPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/mediproduct-6removebgpreview-1.png")}
        />
        <View style={[styles.product10Inner, styles.wrapperFlexBox]}>
          <View style={[styles.aceclofenacWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.paracetamolTypo}>Aceclofenac</Text>
          </View>
        </View>
        <View style={styles.product31}>
          <Image
            style={[styles.product10Child, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-5.png")}
          />
          <Image
            style={[
              styles.mediproduct6RemovebgPreviewIcon1,
              styles.mediproduct6IconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/mediproduct-6removebgpreview-1.png")}
          />
          <Text style={[styles.diclofenac, styles.mrpTypo]}>Diclofenac</Text>
        </View>
      </View>
      <View style={[styles.product11, styles.productPosition]}>
        <Image
          style={[styles.product10Child, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Image
          style={[
            styles.mediproduct6RemovebgPreviewIcon1,
            styles.mediproduct6IconPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/mediproduct-6removebgpreview-1.png")}
        />
        <Text style={[styles.paraDicl, styles.paraTypo]}>
          Para. + Dicl. + Acec...
        </Text>
        <Text style={[styles.paraDicl1, styles.paraTypo]}>
          Para. + Dicl. + Acec...
        </Text>
      </View>
      <View style={[styles.product12, styles.productPosition]}>
        <Image
          style={[styles.product12Child, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Image
          style={[
            styles.mediproduct6RemovebgPreviewIcon4,
            styles.mediproduct6IconPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/mediproduct-6removebgpreview-1.png")}
        />
        <View style={[styles.paraDiclAcecWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.paraTypo}>Para. + Dicl. + Acec...</Text>
        </View>
        <View style={styles.product32}>
          <Image
            style={[styles.product10Child, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-5.png")}
          />
          <Image
            style={[
              styles.mediproduct6RemovebgPreviewIcon1,
              styles.mediproduct6IconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/mediproduct-6removebgpreview-1.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.rectangleIcon, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={styles.mediproduct6RemovebgPreviewIcon}
        resizeMode="cover"
        source={require("../assets/mediproduct-6removebgpreview-1.png")}
      />
      <Text
        style={[styles.paracetamol, styles.paracetamolTypo]}
      >{`Paracetamol `}</Text>
      <View style={styles.product10}>
        <Image
          style={[styles.product10Child, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Image
          style={[
            styles.mediproduct6RemovebgPreviewIcon1,
            styles.mediproduct6IconPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/mediproduct-6removebgpreview-1.png")}
        />
        <View style={[styles.product10Inner, styles.wrapperFlexBox]}>
          <View style={[styles.aceclofenacWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.paracetamolTypo}>Aceclofenac</Text>
          </View>
        </View>
        <View style={styles.product31}>
          <Image
            style={[styles.product10Child, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-5.png")}
          />
          <Image
            style={[
              styles.mediproduct6RemovebgPreviewIcon1,
              styles.mediproduct6IconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/mediproduct-6removebgpreview-1.png")}
          />
          <Text style={[styles.diclofenac, styles.mrpTypo]}>Diclofenac</Text>
        </View>
      </View>
      <View style={[styles.product11, styles.productPosition]}>
        <Image
          style={[styles.product10Child, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Image
          style={[
            styles.mediproduct6RemovebgPreviewIcon1,
            styles.mediproduct6IconPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/mediproduct-6removebgpreview-1.png")}
        />
        <Text style={[styles.paraDicl, styles.paraTypo]}>
          Para. + Dicl. + Acec...
        </Text>
        <Text style={[styles.paraDicl1, styles.paraTypo]}>
          Para. + Dicl. + Acec...
        </Text>
      </View>
      <View style={[styles.product12, styles.productPosition]}>
        <Image
          style={[styles.product12Child, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Image
          style={[
            styles.mediproduct6RemovebgPreviewIcon4,
            styles.mediproduct6IconPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/mediproduct-6removebgpreview-1.png")}
        />
        <View style={[styles.paraDiclAcecWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.paraTypo}>Para. + Dicl. + Acec...</Text>
        </View>
        <View style={styles.product32}>
          <Image
            style={[styles.product10Child, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-5.png")}
          />
          <Image
            style={[
              styles.mediproduct6RemovebgPreviewIcon1,
              styles.mediproduct6IconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/mediproduct-6removebgpreview-1.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.homeScreenChild2, styles.homeChildLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-34624338.png")}
      />
      <Image
        style={[styles.homeScreenChild2, styles.homeChildLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-34624338.png")}
      />
      <Image
        style={[
          styles.mediproduct6RemovebgPreviewIcon12,
          styles.mediproduct6IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/mediproduct-6removebgpreview-1.png")}
      />
      <Text style={[styles.productName, styles.productTypo]}>Product Name</Text>
      <Text style={[styles.netRate, styles.mrpTypo]}>{`Net Rate: `}</Text>
      <Text style={[styles.mrp, styles.mrpTypo]}>{`M.R.P. `}</Text>
      <Text style={[styles.viewAll1, styles.viewTypo]}>View All</Text>
      <Text style={[styles.specialOffer, styles.specialOfferTypo]}>
        Special Offer
      </Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={[styles.homeScreenChild4, styles.homeChildLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-34624338.png")}
      />
      <Image
        style={[
          styles.mediproduct6RemovebgPreviewIcon13,
          styles.mediproduct6IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/mediproduct-6removebgpreview-1.png")}
      />
      <Text style={[styles.productName1, styles.productTypo]}>
        Product Name
      </Text>
      <Text style={[styles.netRate1, styles.mrp1Typo]}>{`Net Rate: `}</Text>
      <Text style={[styles.mrp1, styles.mrp1Typo]}>{`M.R.P. `}</Text>
      <View style={[styles.homeScreenChild5, styles.lineViewLayout]} />
      <Image
        style={[styles.homeScreenChild6, styles.homeChildLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-34624338.png")}
      />
      <Image
        style={[
          styles.mediproduct6RemovebgPreviewIcon14,
          styles.mediproduct6IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/mediproduct-6removebgpreview-1.png")}
      />
      <Text style={[styles.productName2, styles.productTypo]}>
        Product Name
      </Text>
      <Text style={[styles.netRate2, styles.mrp2Typo]}>{`Net Rate: `}</Text>
      <Text style={[styles.mrp2, styles.mrp2Typo]}>{`M.R.P. `}</Text>
      <View style={styles.homeScreenChild7} />
      <View style={[styles.rectangleView, styles.homeChildLayout]} />
      <Text style={[styles.margin9891, styles.marginTypo]}>Margin 98.91%</Text>
      <View style={[styles.homeScreenChild8, styles.homeChildLayout]} />
      <Text style={[styles.margin98911, styles.marginTypo]}>Margin 98.91%</Text>
      <View style={[styles.homeScreenChild9, styles.margin98912Position]} />
      <Text style={[styles.margin98912, styles.margin98912Position]}>
        Margin 98.91%
      </Text>
      <Image
        style={styles.mdiaccountIcon}
        resizeMode="cover"
        source={require("../assets/mdiaccount.png")}
      />
      <Image
        style={styles.love1Icon}
        resizeMode="cover"
        source={require("../assets/love-1.png")}
      />
      <Image
        style={styles.customerSupport1Icon}
        resizeMode="cover"
        source={require("../assets/customersupport-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainButtonPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParentPosition: {
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  cartTypo: {
    width: 44,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_3xs,
    top: 0,
    height: 13,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  specialOfferTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  viewTypo: {
    height: 14,
    width: 49,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  childLayout: {
    height: 114,
    width: 102,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  paracetamolTypo: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
    textAlign: "left",
  },
  mediproduct6IconPosition1: {
    top: 11,
    height: 87,
    width: 85,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mrpTypo: {
    width: 73,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  productPosition: {
    top: 606,
    position: "absolute",
  },
  paraTypo: {
    width: 86,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
    height: 13,
    color: Color.black,
    textAlign: "left",
  },
  homeChildLayout1: {
    height: 145,
    top: 296,
    width: 102,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  mediproduct6IconPosition: {
    top: 307,
    height: 87,
    width: 85,
    position: "absolute",
  },
  productTypo: {
    top: 399,
    width: 73,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
    height: 13,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 87,
    borderTopWidth: 1,
    borderColor: "#015998",
    borderStyle: "solid",
    top: 398,
    position: "absolute",
  },
  mrp1Typo: {
    left: 149,
    width: 73,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  mrp2Typo: {
    left: 264,
    width: 73,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  homeChildLayout: {
    height: 12,
    width: 69,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.steelblue,
  },
  marginTypo: {
    height: 10,
    width: 68,
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  margin98912Position: {
    top: 301,
    position: "absolute",
  },
  homeScreenChild: {
    top: 138,
    backgroundColor: "#94b8fe",
    width: 83,
    height: 57,
    left: 0,
    position: "absolute",
  },
  homeScreenItem: {
    top: 94,
    backgroundColor: "#5f78ff",
    width: 59,
    height: 81,
    left: 301,
    position: "absolute",
  },
  homeScreenInner: {
    top: 1,
    height: 149,
  },
  blueDoctorHealthDayFaceboo: {
    top: 119,
    width: 308,
    height: 128,
    borderRadius: Border.br_mini,
    left: 26,
    position: "absolute",
  },
  userIcon: {
    height: "26.91%",
    width: "7.43%",
    right: "14.32%",
    bottom: "59.76%",
    left: "78.25%",
    top: "13.33%",
    maxWidth: "100%",
    position: "absolute",
  },
  bellIcon: {
    width: "6.71%",
    bottom: "58.89%",
    left: "93.29%",
    right: "0%",
    height: "27.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "13.33%",
    position: "absolute",
    overflow: "hidden",
  },
  component1Child: {
    height: "41.11%",
    width: "96.66%",
    top: "66.67%",
    right: "3.34%",
    bottom: "-7.78%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.snow,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: "0%",
    position: "absolute",
  },
  searchIcon: {
    width: "7.67%",
    top: "72.22%",
    right: "8.55%",
    left: "83.77%",
    height: "27.78%",
    bottom: "0%",
  },
  searchForMedicine: {
    height: "24.44%",
    width: "65.98%",
    top: "78.89%",
    left: "7.67%",
    fontSize: FontSize.size_xs,
    color: Color.gray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_mid,
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  vectorIcon: {
    height: "90.21%",
    width: "30.3%",
    top: "5.09%",
    right: "35.15%",
    bottom: "4.7%",
    left: "34.55%",
    position: "absolute",
  },
  rectangleParent: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  component1Inner: {
    height: "64.86%",
    width: "18.72%",
    top: "-5.56%",
    right: "86.5%",
    bottom: "40.7%",
    left: "-5.22%",
    position: "absolute",
  },
  heganIcon: {
    height: "77.14%",
    width: "90.04%",
    top: "22.86%",
    right: "9.96%",
    left: "0%",
  },
  groupItem: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  r: {
    height: "68.75%",
    width: "37.5%",
    top: "12.3%",
    left: "28.11%",
    fontSize: FontSize.size_8xs,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  ellipseParent: {
    height: "25%",
    width: "7.26%",
    bottom: "75%",
    left: "92.74%",
  },
  groupView: {
    height: "36.15%",
    width: "35.29%",
    top: "6.67%",
    right: "33.1%",
    bottom: "57.19%",
    left: "31.61%",
    position: "absolute",
  },
  component1: {
    top: 12,
    left: 37,
    width: 297,
    height: 90,
    position: "absolute",
  },
  mainButton: {
    top: 725,
    height: 75,
  },
  home: {
    width: 32,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_3xs,
    top: 0,
    height: 13,
    color: Color.black,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  wishlist: {
    left: 62,
  },
  cart: {
    left: 142,
  },
  product3: {
    width: 186,
    top: 0,
    height: 13,
    left: 0,
    position: "absolute",
  },
  support: {
    left: 210,
  },
  account: {
    left: 284,
  },
  product3Parent: {
    top: 776,
    height: 13,
    width: 328,
    left: 24,
    position: "absolute",
  },
  shopByFormulation: {
    left: 10,
    width: 111,
    height: 15,
    top: 449,
  },
  viewAll: {
    top: 449,
    left: 301,
  },
  rectangleIcon: {
    left: 15,
    top: 472,
  },
  mediproduct6RemovebgPreviewIcon: {
    top: 483,
    height: 87,
    width: 85,
    left: 24,
    position: "absolute",
  },
  paracetamol: {
    top: 581,
    left: 40,
    width: 56,
    height: 13,
    position: "absolute",
  },
  product10Child: {
    left: -4,
    top: 0,
  },
  mediproduct6RemovebgPreviewIcon1: {
    left: 5,
  },
  aceclofenacWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  product10Inner: {
    padding: Padding.p_3xs,
    top: 99,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    left: 15,
  },
  diclofenac: {
    left: 28,
    top: 109,
    height: 13,
  },
  product31: {
    left: 113,
    width: 101,
    height: 122,
    top: 0,
    position: "absolute",
  },
  product10: {
    left: 140,
    width: 214,
    height: 131,
    top: 472,
    position: "absolute",
  },
  paraDicl: {
    left: 8,
    top: 109,
    position: "absolute",
  },
  paraDicl1: {
    left: 242,
    top: 109,
    position: "absolute",
  },
  product11: {
    left: 19,
    height: 122,
    width: 328,
  },
  product12Child: {
    left: -3,
    top: 0,
  },
  mediproduct6RemovebgPreviewIcon4: {
    left: 6,
  },
  paraDiclAcecWrapper: {
    padding: Padding.p_3xs,
    top: 99,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    left: 0,
  },
  product32: {
    left: 114,
    width: 94,
    height: 106,
    top: 0,
    position: "absolute",
  },
  product12: {
    left: 139,
    width: 208,
    height: 132,
  },
  homeScreenChild2: {
    left: 12,
  },
  mediproduct6RemovebgPreviewIcon12: {
    left: 21,
  },
  productName: {
    left: 34,
  },
  netRate: {
    top: 409,
    left: 26,
    width: 73,
  },
  mrp: {
    top: 418,
    left: 26,
    width: 73,
  },
  viewAll1: {
    top: 276,
    left: 309,
  },
  specialOffer: {
    top: 275,
    left: 18,
    width: 93,
    height: 18,
  },
  lineView: {
    left: 20,
  },
  homeScreenChild4: {
    left: 135,
  },
  mediproduct6RemovebgPreviewIcon13: {
    left: 144,
  },
  productName1: {
    left: 157,
  },
  netRate1: {
    top: 409,
  },
  mrp1: {
    top: 418,
  },
  homeScreenChild5: {
    left: 143,
  },
  homeScreenChild6: {
    left: 250,
  },
  mediproduct6RemovebgPreviewIcon14: {
    left: 259,
  },
  productName2: {
    left: 272,
  },
  netRate2: {
    top: 409,
  },
  mrp2: {
    top: 418,
  },
  homeScreenChild7: {
    left: 258,
    backgroundColor: Color.steelblue,
    height: 1,
    width: 87,
    borderTopWidth: 1,
    borderColor: "#015998",
    borderStyle: "solid",
    top: 398,
    position: "absolute",
  },
  rectangleView: {
    left: 30,
    top: 300,
    position: "absolute",
  },
  margin9891: {
    left: 33,
    top: 300,
    position: "absolute",
  },
  homeScreenChild8: {
    left: 153,
    top: 300,
    position: "absolute",
  },
  margin98911: {
    left: 156,
    top: 300,
    position: "absolute",
  },
  homeScreenChild9: {
    left: 268,
    height: 12,
    width: 69,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.steelblue,
  },
  margin98912: {
    left: 271,
    height: 10,
    width: 68,
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  mdiaccountIcon: {
    top: 738,
    left: 307,
    width: 39,
    height: 39,
    position: "absolute",
    overflow: "hidden",
  },
  love1Icon: {
    top: 743,
    left: 90,
    width: 28,
    height: 28,
    position: "absolute",
  },
  customerSupport1Icon: {
    top: 744,
    left: 237,
    width: 30,
    height: 26,
    position: "absolute",
  },
  homeScreen: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default HomeScreen;
