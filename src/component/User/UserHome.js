import React, { Component } from "react"
import { WebView,PermissionsAndroid, Share, Dimensions, Linking, Platform, View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
// import { Loader } from "../../components/app/Loader"
import ScreenHeader from "../ScreenHeader"
import { Container, Content, Card, Button, Icon } from "native-base"
const _width = Dimensions.get('window').width
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Permission from './Permission'
import BridgeModule from '../../../Bridging'
import {Loader} from '../Loader'

var dummyArray = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5']
var numberArray = ['+917021278218', '+917277381012']
var dummyNews = {
    "status": "ok",
    "totalResults": 70,
    "articles": [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Faith Karimi, CNN",
            "title": "Over 246,000 pounds of breakfast wraps recalled because they may have small rocks - CNN",
            "description": "A Texas company is recalling more than 246,000 pounds of frozen breakfast wraps sold nationwide over fears the bacon may be contaminated with extraneous materials, especially small rocks.",
            "url": "https://www.cnn.com/2019/06/16/health/frozen-breakfast-wraps-recall/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190616025549-wraprecall-super-tease.jpg",
            "publishedAt": "2019-06-16T07:37:00Z",
            "content": "(CNN)A Texas company is recalling more than 246,000 pounds of frozen breakfast wraps sold nationwide over fears the bacon may be contaminated with extraneous materials, especially small rocks. \r\nThe El Monterey frozen breakfast wraps also contain egg, potato … [+726 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Coindesk.com"
            },
            "author": "Omkar Godbole",
            "title": "Above $9.3K: Bitcoin's Price Prints 13-Month High - CoinDesk",
            "description": "Bitcoin's price rose to 13-month highs above $9,300 on Sunday, taking cumulative weekly gains to 17 percent.",
            "url": "https://www.coindesk.com/above-9-3k-bitcoins-price-prints-13-month-high",
            "urlToImage": "https://static.coindesk.com/wp-content/uploads/2017/05/balloon.jpg",
            "publishedAt": "2019-06-16T05:57:00Z",
            "content": "The price of bitcoin (BTC) hit a 13-month high above $9,300 on Sunday.\r\nThe leading cryptocurrency by market capitalization rose to $9,381 at  05:55 UTC the highest price since May 10, 2018, according to CoinDesk’s Bitcoin Price Index.\r\nBTC was last seen trad… [+2398 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fool.com"
            },
            "author": "Daniel B. Kline",
            "title": "2 Reasons It May Be Time to Drop Amazon Prime - Motley Fool",
            "description": "The longtime standard bearer of shipping now has some major rivals.",
            "url": "https://www.fool.com/investing/2019/06/15/2-reasons-it-may-be-time-to-drop-amazon-prime.aspx",
            "urlToImage": "https://g.foolcdn.com/editorial/images/528837/amazon-prime-truck.jpg",
            "publishedAt": "2019-06-16T00:04:00Z",
            "content": "Amazon (NASDAQ:AMZN) has set the standard for delivery of online orders. The company made two-day shipping the norm, and now it's leading the way into next-day delivery, forcing its chief rivals, Walmart (NYSE:WMT) and Target (NYSE:TGT), to follow.\r\nThe compa… [+3027 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Nicole Chavez, CNN",
            "title": "J.J. Watt is calling on fans to buy back Whataburger. The Texas governor is on board - CNN",
            "description": "Whataburger fans are not happy over the sale of the fast food chain. Neither is Houston Texans star J.J. Watt.",
            "url": "https://www.cnn.com/2019/06/15/business/whataburger-jj-watt-texas-trnd/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/180521161947-02-jj-watt-file-super-tease.jpg",
            "publishedAt": "2019-06-15T23:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Fox32chicago.com"
            },
            "author": "FOX",
            "title": "Illinois' new 38 cent gas tax will probably send drivers to Indiana, experts say - Fox 32 Chicago",
            "description": "Gasoline tax hikes in Illinois will likely send more drivers looking for better prices in Indiana, but it's unclear if a higher levy on cigarettes will have the same effect, industry analysts said.",
            "url": "http://www.fox32chicago.com/news/local/illinois-new-38-cent-gas-tax-will-probably-send-drivers-to-indiana-experts-say",
            "urlToImage": "https://media.my9nj.com/media.my9nj.com/photo/2019/06/12/US_gas_prices_could_fall_below__2_per_ga_0_7391204_ver1.0_640_360.jpg",
            "publishedAt": "2019-06-15T23:15:00Z",
            "content": "HAMMOND, Ind. (AP) - Gasoline tax hikes in Illinois will likely send more drivers looking for better prices in Indiana, but it's unclear if a higher levy on cigarettes will have the same effect, industry analysts said.\r\nStarting July 1, the Illinois gas tax w… [+1844 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Startribune.com"
            },
            "author": "Katy Read, Jackie Crosby",
            "title": "Target checkout systems back up after hourslong outage - Star Tribune",
            "description": "Long lines formed as Saturday shopping outings slowed to a snail's pace. Even after the retailer said the problem was fixed, shoppers reported delays.",
            "url": "http://www.startribune.com/target-cash-registers-down-across-united-states-outage-pos/511350631/",
            "urlToImage": "http://stmedia.stimg.co/1560631430_08+1009023589+1Target061619.JPG?h=630&w=1200&fit=crop&bg=999&crop=faces",
            "publishedAt": "2019-06-15T22:38:11Z",
            "content": "Target stores in Minnesota and across the nation were effectively paralyzed for several hours Saturday when a system malfunction left frustrated customers unable to make purchases.\r\nDisplaying varying degrees of patience, Minnesotans making their weekend Targ… [+5304 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fool.com"
            },
            "author": "Maurie Backman",
            "title": "3 Things That Might Happen When You Live Paycheck to Paycheck - The Motley Fool",
            "description": "Hint: None of them are positive.",
            "url": "https://www.fool.com/retirement/2019/06/15/3-things-that-might-happen-when-you-live-paycheck.aspx",
            "urlToImage": "https://g.foolcdn.com/editorial/images/528850/sheepish-man-holding-money_gettyimages-497828228.jpg",
            "publishedAt": "2019-06-15T22:23:00Z",
            "content": "Living to paycheck to paycheck isn't a good thing, yet 59% of Americans do so, according to Schwab's 2019 Modern Wealth Survey. You may be thinking: \"If my paychecks are just enough to cover all of my bills, what's the problem?\" The answer boils down to these… [+3515 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Dennis Romero, Michelle Acevedo, Associated Press",
            "title": "Target says cash registers back online after two-hour outage - NBC News",
            "description": "Technology problems with Target's point-of-sale system created long lines for Father's Day shoppers for about two hours Saturday.",
            "url": "https://www.nbcnews.com/news/us-news/target-says-cash-registers-back-online-after-two-hour-outage-n1017951",
            "urlToImage": "https://media4.s-nbcnews.com/j/newscms/2019_24/2897591/190615-target-checkout-troubles-axc_c7586f4c4178f2fd7f60635aae342f9c.nbcnews-fp-1200-630.jpg",
            "publishedAt": "2019-06-15T22:19:00Z",
            "content": "Cash registers at Target stores were back up Saturday after being down for two hours, creating long lines at the checkout counter for last-minute Father's Day shoppers.\r\nThe company blamed \"an internal technology issue\" for the outage.\r\n\"Targets registers are… [+856 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cleantechnica.com"
            },
            "author": "https://www.facebook.com/zachary.shahan",
            "title": "Tesla Model 3 Maintenance Costs ... Toyota Surrenders To Tesla ... VW Advertising EVs! — #CleanTechnica Top 20 - CleanTechnica",
            "description": "Yet again, before sharing the 20 most popular CleanTechnica articles of the past week, I'm going to force you to read my personal favorites from our pool of exclusives/originals. (Of course, if you are smart, you can just scroll past my favorites.)",
            "url": "https://cleantechnica.com/2019/06/15/tesla-model-3-maintenance-costs-toyota-surrenders-to-tesla-vw-advertising-evs-cleantechnica-top-20/",
            "urlToImage": "https://cleantechnica.com/files/2019/05/IMG_20190517_195317896.jpg",
            "publishedAt": "2019-06-15T22:10:52Z",
            "content": "CarsPublished on June 15th, 2019 |\r\n by Zachary Shahan\r\n0\r\nJune 15th, 2019 by Zachary Shahan \r\nYet again, before sharing the 20 most popular CleanTechnica articles of the past week, I’m going to force you to read my personal favorites from our pool of exclusi… [+4025 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ajc.com"
            },
            "author": "Cox Media Group National Content Desk",
            "title": "Long lines fill Target aisles after computer glitch temporarily causes nationwide system shutdown - Atlanta Journal Constitution",
            "description": "Update  6 p.m.",
            "url": "https://www.ajc.com/news/national/long-lines-fill-target-aisles-after-computer-glitch-causes-nationwide-system-shutdown/j6UwyAGKe3Nu7W06HpN2jI/",
            "urlToImage": "https://www.ajc.com/rf/image_large/Pub/p10/CmgSharedContent/2019/06/15/Images/target%20sign.jpg",
            "publishedAt": "2019-06-15T22:07:30Z",
            "content": "Update  6 p.m. EDT June 15: Target issued a statement indicating that its registers are back online. The company said that the outage was not the result of a security-related issue or data breach. Target also assured customers that no personal data was compro… [+1217 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fool.com"
            },
            "author": "Dan Caplinger",
            "title": "On Social Security? Expect a Smaller Raise in 2020 - The Motley Fool",
            "description": "Cost-of-living increases next year aren't likely to match the 2.8% boost recipients got for 2019.",
            "url": "https://www.fool.com/retirement/2019/06/15/on-social-security-expect-a-smaller-raise-in-2020.aspx",
            "urlToImage": "https://g.foolcdn.com/editorial/images/528739/ss-w-coins-gettyimages-495700442.jpg",
            "publishedAt": "2019-06-15T22:03:00Z",
            "content": "Living on a fixed income is hard, and a large number of retirees in the U.S. rely on Social Security to provide all or almost all of their regular income. One particularly beneficial way that Social Security helps retirees is that the monthly checks that reci… [+3879 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Kate Taylor",
            "title": "Target cash register outage leaves frustrated customers across US - Business Insider UK",
            "description": "The incident was dubbed \"The Great Target Outage of '19\" on social media, with many comparing Target's struggles to the disasterous Fyre Festival.",
            "url": "https://www.businessinsider.com/target-cash-register-great-target-outage-2019-6?module=topTout&area=readMore",
            "urlToImage": "https://amp.businessinsider.com/images/5d0549f46fc920233974ab62-750-375.jpg",
            "publishedAt": "2019-06-15T22:02:59Z",
            "content": "Target faced massive technical difficulties on Saturday, as customers across the US found themselves unable to check out at the retailer. \r\n At around 2 p.m. ET, Target customers at locations across the US began reporting malfunctioning cash registers on soci… [+1474 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nypost.com"
            },
            "author": "Eileen AJ Connelly",
            "title": "Hacker group Xenotime has sights on US electric grid: report - New York Post ",
            "description": "A group of hackers known for targeting oil and gas companies has its sights on the nation’s electric grid. Xenotime started “probing” the networks of US electric utilities late last year, a study b…",
            "url": "https://nypost.com/2019/06/15/hacker-group-xenotime-has-sights-on-us-electric-grid-report/",
            "urlToImage": "https://thenypost.files.wordpress.com/2019/06/dragos-xenotime-power-grid.jpg?quality=90&strip=all&w=1200",
            "publishedAt": "2019-06-15T22:02:00Z",
            "content": "A group of hackers known for targeting oil and gas companies has its sights on the nations electric grid.\r\nXenotime started probing the networks of US electric utilities late last year, a study by Maryland-based cybersecurity group Dragos found.\r\nSo far, none… [+663 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Theadvocate.com"
            },
            "author": "Associated Press",
            "title": "More than 175K Louisiana drivers will see car insurance rates drop in September; here's why - The Advocate",
            "description": "Some Louisiana drivers will see their car insurance rates drop starting later this summer.",
            "url": "https://www.theadvocate.com/baton_rouge/news/article_0526be38-8fb3-11e9-a9c9-1792e4a555b1.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/2/49/249cc2ce-4191-11e8-8c46-6720eb6bcf9e/5a3c4b01ea9c1.image.jpg?crop=1150%2C785%2C36%2C295&resize=923%2C630&order=crop%2Cresize",
            "publishedAt": "2019-06-15T21:30:00Z",
            "content": "Some Louisiana drivers will see their car insurance rates drop starting later this summer.\r\nInsurance Commissioner Jim Donelon announced Thursday that he has approved a 2.2% rate decrease for private passenger automobile policies through Progressive Security … [+710 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fool.com"
            },
            "author": "Matthew DiLallo",
            "title": "1 Ridiculously Cheap High-Yield Stock Worth Watching - Motley Fool",
            "description": "This beaten-down master limited partnership has big-time upside potential if it can turn things around.",
            "url": "https://www.fool.com/investing/2019/06/15/1-ridiculously-cheap-high-yield-stock-worth-watchi.aspx",
            "urlToImage": "https://g.foolcdn.com/editorial/images/528840/a-roll-of-cash-next-to-a-calculator-and-a-sticky-note-with-the-word-dividends.jpg",
            "publishedAt": "2019-06-15T21:00:00Z",
            "content": "Units of Summit Midstream Partners(NYSE:SMLP) have tumbled more than 50% in the past year due to concerns about its financial profile. Not only was the master limited partnership (MLP) paying out an uncomfortably high percentage of its cash flow to investors,… [+3745 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Newschannel9.com"
            },
            "author": "Mariah Rock",
            "title": "Post reaction to the Volkswagen Chattanooga voting to NOT unionize - WTVC",
            "description": "It's a mix of emotions that range from being ecstatic to disliking.. the outcome of the final vote for Volkswagen Chattanooga.. to not become a union. For some... Friday night was a night of celebration\"I am excited about the results,\" says Volkswagen employe…",
            "url": "http://newschannel9.com/news/local/post-reaction-to-the-volkswagen-chattanooga-voting-to-not-unionize",
            "urlToImage": "http://static-38.sinclairstoryline.com/resources/media/27502471-8630-49ba-a054-734863724c9c-large16x9_ReactionFridaynightandSaturdaymorning.ImagebyWTVC.png?1560630250565",
            "publishedAt": "2019-06-15T20:29:08Z",
            "content": "CHATTANOOGA, Tenn.  It's a mix of emotions that range from being ecstatic to disliking.. the outcome of the final vote for Volkswagen Chattanooga.. to not become a union.\r\nFor some...Friday night was a night of celebration\r\n\"I am excited about the results,\" s… [+1619 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News12.com"
            },
            "author": null,
            "title": "FAA: Plane skids off runway, Newark flights delayed - News 12 New Jersey",
            "description": "Flights at Newark Liberty International Airport are delayed due to an aircraft that skidded off the runway, according to the FAA.",
            "url": "http://newjersey.news12.com/story/40654288/faa-plane-skids-off-runway-newark-flights-delayed",
            "urlToImage": "https://NEWS12NJ.images.worldnow.com/images/18502026_G.jpeg?lastEditedDate=20190615155602",
            "publishedAt": "2019-06-15T18:35:00Z",
            "content": "NEWARK -\r\n Passengers of United Airlines Flight 627 from Denver to Newark Liberty International Airport say it was mere seconds before the plane's landing on runway 22 Saturday afternoon went from normal to frightening.\r\nAuthorities say the tires blew while l… [+935 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fool.com"
            },
            "author": "Katie Brockman",
            "title": "401(k) vs. IRA: Which One Is Right for You? - The Motley Fool",
            "description": "The differences between them may seem slight, but you could potentially save money by choosing one type of account over the other.",
            "url": "https://www.fool.com/retirement/2019/06/15/401k-vs-ira-which-one-is-right-for-you.aspx",
            "urlToImage": "https://g.foolcdn.com/editorial/images/528474/retirement-savings-plan.jpg",
            "publishedAt": "2019-06-15T18:31:00Z",
            "content": "There are dozens of factors to consider as you're planning for retirement. How much should you be saving? What age should you retire? How much will you be receiving in Social Security benefits? One factor that's probably not among your top concerns, however, … [+6698 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The-japan-news.com"
            },
            "author": "The Yomiuri Shimbun",
            "title": "Huawei leverages massive patent portfolio - The Japan News",
            "description": "WASHINGTON (Bloomberg) — As Huawei Technologies Co. comes under fierce pressure from the Trump administration, the Chinese telecom giant has one advantage that the U.S. can’t undermine: a vast, global portfolio of patents on critical technology.",
            "url": "http://www.the-japan-news.com/news/article/0005812867",
            "urlToImage": "https://the-japan-news-archives.s3-ap-northeast-1.amazonaws.com/preview/entries/280762/materials/810046/c1c4f51fca878efdf7bb9cf2b683f2d6.jpg?AWSAccessKeyId=AKIAI7EPFDYX6SSPYKKQ&Expires=1560742847&Signature=XaUgeC6n%2F4%2F66CM3HEW7GkvfN6c%3D",
            "publishedAt": "2019-06-15T18:00:00Z",
            "content": "Bloomberg WASHINGTON (Bloomberg) As Huawei Technologies Co. comes under fierce pressure from the Trump administration, the Chinese telecom giant has one advantage that the U.S. cant undermine: a vast, global portfolio of patents on critical technology.\r\n Huaw… [+2802 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Stephen Wilmot",
            "title": "Auto Consolidation Is Vital but Needs a Crisis - The Wall Street Journal",
            "description": "Most successful auto mergers are born of crisis. Even if Fiat Chrysler finds a deal with Renault, investors shouldn’t expect a broader consolidation wave until industry profits look a lot shakier.",
            "url": "https://www.wsj.com/articles/auto-consolidation-is-vital-but-needs-a-crisis-11560607201",
            "urlToImage": "https://images.wsj.net/im-82193/social",
            "publishedAt": "2019-06-15T14:00:00Z",
            "content": "Most successful auto mergers are born of crisis. Even if Fiat Chrysler does find a deal with Renault, investors shouldnt expect a broader consolidation wave until industry profits look a lot shakier.Hopes of a merger between the two car makers, seemingly dash… [+3726 chars]"
        }
    ]
}

export default class UserHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dangerMessage: "I am in Danger. Kindly reach me at this location",
            isFetching: false,
            permissionAccept: false,
            loading : true
        }
    }

    componentDidMount() {
        this.fetchLatestNews()
        this.askLocationPermission()
    }

    sendSMS(phoneNumber) {
        PermissionsAndroid.requestMultiple(
            [
                PermissionsAndroid.PERMISSIONS.SEND_SMS,
            ], {
                title: 'Permission',
                message: 'We need your permission.',
            },
        )
            .then((permRes) => {

                if (permRes['android.permission.SEND_SMS'] === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('permRes', permRes)

        for (i = 0; i < numberArray.length; i++) {
            var msg = "Hey..I am in danger. Need Help immediately Please track me on : " + this.state.marker.latitude + "," + this.state.marker.longitude
            BridgeModule.send(123, numberArray[i], "Hey.." + msg, (msg) => { alert("Help is on your way") });
        }
    }})
    }

    askLocationPermission() {
        console.log("fetchCurrentLocation1")

        if (Platform.OS === "ios") {
            this.setState({
                permissionAccept: true
            });
            this.fetchCurrentLocation();
        } else {
            console.log("fetchCurrentLocation2")

            Permission.checkLocationPermission(
                Permission => {
                    console.log("fetchCurrentLocation3")
                    this.setState({
                        permissionAccept: true
                    });
                    this.fetchCurrentLocation();
                },
                deniedPermission => {
                    console.log("fetchCurrentLocation4")
                }
            );
        }
    }

    fetchCurrentLocation() {
        console.log("fetchCurrentLocation5", this.state.permissionAccept)
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(" Lat", position.coords.latitude)
                console.log(" Long", position.coords.longitude)
                this.setState({
                    marker: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                },()=>{
                    global.currentPosition = this.state.marker
                });
                console.log(" Marker lat", this.state.marker.latitude)
                console.log(" Marker lat", this.state.marker.longitude)

            },
            error => {
                console.log(" Marker lat")
            },
            { enableHighAccuracy: false, timeout: 200000 }
        );
    }

    fetchLatestNews() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6682d7ea404441f8983268ad1eefc24d"
        fetch(url).then(response => response.json()).then(responseJson => {
            if (responseJson.status === "ok" && responseJson.totalResults.length > 0)
                this.setState({ latestNews: responseJson.articles , loading:false })
            else
                this.setState({ latestNews: dummyNews.articles , loading:false})
        }).catch(error => {
            this.setState({ latestNews: dummyNews.articles , loading:false})
        })
    }

    sharecard(item) {
        Share.share({
            message: item.url,
            url: item.url,
            title: 'Wow, did you see that?'
        }, {
                // Android only:
                dialogTitle: 'Share BAM goodness',
            })
    }

    static navigationOptions = {
        header: null
    }

    onRefresh() {
        // this.setState({isFetching})
    }

    _renderNewFeed(item) {
        return (
            <TouchableOpacity
                style={{ width: _width - 40, alignSelf: "center" }}
            >
                <View style={{ width: _width - 40 }}>
                    <Card style={styles.card}>
                        <View style={styles.lineNcontentView}>
                            <View
                                style={[styles.leftLine, {
                                    // backgroundColor: data.tagsColor 
                                }]}
                            />
                            <View style={styles.contentView}>
                                <Text
                                    numberOfLines={2}
                                    style={[styles.heading, {
                                        //  color: data.tagsColor 
                                    }]}
                                >
                                    {item.item.title}
                                </Text>
                                <Text numberOfLines={3} style={styles.details}>
                                    {item.item.description}
                                </Text>
                                <View style={styles.lineHorizontal} />
                                <View style={styles.viewBottom}>
                                    {/* <Image
                                        source={{ uri: data.sourceIconURL }}
                                        resizeMode="contain"
                                        style={styles.image}
                                    /> */}
                                    <View style={styles.bottomView}>
                                        <View style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: 'red' }} />
                                        <Text numberOfLines={1} style={styles.bottomTexts}>
                                            {item.item.source.name}
                                        </Text>
                                        <View style={styles.dot} />
                                        <Text numberOfLines={1} style={styles.bottomTexts}>
                                            time
                            </Text>
                                        <View style={styles.dot} />
                                        <Text style={styles.bottomTexts}>readTime}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Card>
                    {/* {data.isLiked ? ( */}
                    <Button
                        onPress={() => this.sharecard(item.item)}
                        style={styles.likedView}>
                        <Icon name="share" style={styles.likeIcon} />
                    </Button>
                    {/* ) : null} */}
                </View>
            </TouchableOpacity>
        );
    }

    _renderFooter() {
        return (
            <View style={{ height: 140, width: '100%' }} />
        )
    }

    render() {
        const { latestNews } = this.state
        return (
            <Container>
                <ScreenHeader
                    {...this.props}
                    headerColor="#FFFFFF"
                    androidStatusBarColor="#FFFFFF"
                    title={'News Feed'}
                    subTitle=""
                    left= {90}
                    onLeftIconPress={() => this.props.navigation.goBack()}
                    enableRightIcon={true}
                    enableLeftIcon={false}

                />

                <Content contentContainerStyle={{ flex: 1 }}>

                    <Loader message={'Getting News'} loading={this.state.loading}/>

                    <FlatList
                        extraData={this.state}
                        data={latestNews}
                        renderItem={item => this._renderNewFeed(item)}
                        keyExtractor={(item, index) => index.toString()}
                        ListFooterComponent={()=>this._renderFooter()}
                        // onRefresh={() => this.onRefresh()}
                    // refreshing={this.state.isFetching}
                    />
                    <View
                        style={{
                            height: 80,
                            flexDirection: "row",
                            position: 'absolute',
                            bottom: 0,
                            right: 10,
                            marginBottom: 60,
                            marginRight: 0,
                            alignContent: 'center'
                        }}
                    >

                        <TouchableOpacity onLongPress={() => this.sendSMS()} style={{ flexDirection: 'row' }}>
                            <View
                                style={{ marginRight: -25, height: 50, borderRadius: 25, width: 240, backgroundColor: 'red', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', color: '#ffffff', minWidth: '20%', fontSize: 14, }}>Long Press to activate </Text>
                            </View>
                            <View
                                style={{ height: 80, borderRadius: 40, width: 80, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center', color: '#ffffff', minWidth: '20%', fontSize: 16, }}>SOS</Text>
                            </View>
                        </TouchableOpacity>

                    </View>


                    <Card
                        style={{
                            borderTopColor: "#ECECEC",
                            borderTopWidth: 2,
                            height: 56,
                            flexDirection: "row",
                            position: 'absolute',
                            bottom: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            elevation: 2,
                            justifyContent: 'space-between'
                        }}
                    >

                        <Button
                            block
                            onPress={() => this.props.navigation.navigate('SelectComplainType')}
                            style={{ height: '100%', width: '100%', backgroundColor: '#2f4efa', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ffffff', minWidth: '20%', fontSize: 16, }}>Lodge A Complain</Text>
                        </Button>
                    </Card>

                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    headingText: {
        fontFamily: "Roboto_medium",
        fontSize: 16,
        color: "#212121"
    },
    headingView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 15,
        padding: 3
    },
    cardOuterView: { width: "100%", marginTop: 10 },
    image: { width: 20, height: 20 },
    viewBottom: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    lineHorizontal: {
        width: "85%",
        backgroundColor: "#f3f3f3",
        height: 1,
        alignSelf: "center",
        marginLeft: 0
    },
    bottomView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginStart: 5
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        alignSelf: "center",
        backgroundColor: "#4A4A4A",
        margin: 5
    },

    bottomTexts: { fontSize: 11, color: "#4A4A4A", marginLeft: 4 },

    details: {
        color: "#202020",
        fontSize: 13,
        textAlign: "justify"
    },
    heading: { fontWeight: "700", color: "#dbb003" },

    lineNcontentView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "90%"
    },
    likeIcon: {
        fontSize: 17,
        color: "white",
        paddingLeft: 15,
        paddingRight: 15,
        padding: 6
    },
    likeText: { fontSize: 16, color: "white" },
    contentView: {
        flexDirection: "column",
        justifyContent: "space-around",
        height: 150,
        padding: 10
    },
    leftLine: {
        width: 3,
        backgroundColor: "green",
        height: "70%",
        borderRadius: 8
    },
    container: {
        height: 200,
        padding: 0,
        justifyContent: "center",
        backgroundColor: "#f7f7f7"
    },
    card: {
        borderRadius: 4,
        elevation: 2,
        height: 150,
        backgroundColor: "white"
    },
    likedView: {
        height: 28,
        position: "absolute",
        backgroundColor: "#ffbd1a",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 14,
        right: -5,
        top: 5,
        borderBottomRightRadius: 2,
        borderTopRightRadius: 2
    }
});


