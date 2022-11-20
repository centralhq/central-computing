import React from "react";
import { Button, SHAPE, SIZE } from 'baseui/button';
import ChevronRight from 'baseui/icon/chevron-right';
import SectionContainer from "../components/SectionContainer";
import OverviewView from "../components/OverviewView";
import Hero from "../static/images/svg/central-hero.svg";
import Diagram from "../static/images/svg/central-diagram.svg";
import sanitizeHtml from "sanitize-html";
import { navigate, Script } from 'gatsby';
import { marked } from "marked";
import hljs from "highlight.js";
import ReactGA from 'react-ga4';
import "highlight.js/styles/github-dark.css";
import './_index.scss';

const IndexPage = () => {

    const javascript = `
    const object = centralClient
        .handleIncomingOp(response)
        .then(op => op);

    object.color = "#141414"

    await centralClient
        .setObject(object);
  `;

    const golang = `
    client := Central.NewClient(
        server.CentralHub, 
        conn, 
        server.handler, 
        uuid
    )
    
    client.CentralHub.reg <- client
    
    go client.write()
    go client.read()
    `;

    const codeViews = [
        {
            title: "Client",
            content: (<div className="code-zone">
                <div className="line-number-wrapper code">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                </div>
                <div className="code">
                    <pre>
                        <code className="language-javascript code" dangerouslySetInnerHTML={{__html: sanitizeHtml(marked(javascript))}}/>
                    </pre>
                </div>
            </div>)
        },
        {
            title: "Server",
            content: (<div className="code-zone">
                    <div className="line-number-wrapper code">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                    </div>
                        <div className="code">
                            <pre>
                                <code className="language-go code" dangerouslySetInnerHTML={{__html: sanitizeHtml(marked(golang))}}/>
                            </pre>
                        </div>
                    </div>)
        },
    ]

    return (
        <React.Fragment>
            <div className="section-border section-hero">
                <SectionContainer fullWidth={true} backgroundColor="dark">
                    <div className="layout-wrapper wrapper-hero">
                            <div className="hero-headline">
                                <div className="hero-text">
                                    <h1 className="hero-title">
                                        Build multiplayer apps in a day
                                    </h1>
                                    <h3 className="hero-subtitle">
                                        No more hacking together solutions, wrestling with exotic APIs, or struggling with edge cases. Start shipping multiplayer apps that just work.
                                    </h3> 
                                    <Button
                                    endEnhancer={() => <ChevronRight size={24} />}
                                    shape={SHAPE.pill}
                                    size={SIZE.compact}
                                    onClick={() => {
                                        ReactGA.send({ hitType: "pageview", page: "/book" });
                                        navigate("/book");
                                    }}
                                    >
                                        Try it out
                                    </Button>
                                </div>
                            </div>
                        <div className="asset-container">
                            <div className="asset-frame hero-image">
                                <Hero />
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </div>
            <div className="section-border section-overview">
                <SectionContainer fullWidth={true} backgroundColor="dark">
                    <div className="layout-wrapper">
                        <div className="overview-description">
                            <div className="overview-headline">
                                <div className="overview-title">
                                    <h3 className="overview-title-context">
                                        How it works
                                    </h3>
                                    <h2 className="overview-title-text">
                                        Simple infrastructure for your multi-user features
                                    </h2>
                                </div>
                                <div className="overview-subtitle">
                                    <p className="overview-subtitle-text">Multi-user apps are just single-user apps with multi-user networking. Central provides the building blocks so you can focus on building your core features. Instead of onboarding your team into exotic APIs, you can put together your multi-user app in a day by embedding simple packages.</p>
                                </div>
                                <Button
                                endEnhancer={() => <ChevronRight size={24} />}
                                shape={SHAPE.pill}
                                size={SIZE.compact}
                                onClick={() => {
                                    ReactGA.send({ hitType: "pageview", page: "/book" });
                                    navigate("/book");
                                }}
                                >
                                    Get started
                                </Button>
                            </div>
                        </div>
                        <div className="asset-container">
                            <div className="asset-frame overview-hero">
                                <Diagram />
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </div>
            <div className="section-border darken"> 
                <SectionContainer fullWidth={true} backgoundColor="dark">
                    <div className="layout-wrapper">
                        <div className="overview-description">
                            <div className="overview-headline">
                                <div className="overview-title">
                                    <h3 className="overview-title-context">
                                        Why Central
                                    </h3>
                                    <h2 className="show-title-text">
                                        Modules that grow with your product
                                    </h2>
                                </div>
                                <div className="overview-subtitle">
                                    <p className="show-subtitle-text light-gray">No need to worry about handling memory limits or errors from edge cases. Central manages the hard stuff. Add front-end handler and assign backend worker to Central easily no matter your product maturity.</p>
                                </div>
                                    <Button
                                    endEnhancer={() => <ChevronRight size={24} />}
                                    shape={SHAPE.pill}
                                    size={SIZE.compact}
                                    onClick={() => {
                                        ReactGA.send({ hitType: "pageview", page: "/book" });
                                        navigate("/book");
                                    }}
                                    >
                                        Find out more
                                    </Button>
                            </div>
                        </div>
                        <div className="asset-container">
                            <div className="asset-frame">
                                    <div className="overview-wrapper">
                                        <OverviewView views={codeViews} effect={() => hljs.highlightAll()}/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </div>
            <div className="section-border grayer">
                <SectionContainer className="section-signup">
                    <div className="email-update">
                        <h2 className="how-title display-4">
                            Build your app's collaborative future with Central
                        </h2>
                        <p className="signup-subtext">We'd like to realise a collaborative future for the internet. We'd love to start with you.</p>
                        <Button
                                    endEnhancer={() => <ChevronRight size={24} />}
                                    shape={SHAPE.pill}
                                    size={SIZE.compact}
                                    onClick={() => {
                                        ReactGA.send({ hitType: "pageview", page: "/book" });
                                        navigate("/book");
                                    }}
                                    >
                                        Book a demo
                                    </Button>
                    </div>
                </SectionContainer>
            </div>
        </React.Fragment>    
                    
    );
}

export const Head = () => {
    return(
    <React.Fragment>
        <title>Multi-user apps in a day</title>
        <meta name="description" content="Build multiplayer apps in a day. Our modules are built for easy integration and scalable from day one. No need to worry about memory limits or edge cases, we deal with the hard stuff." />
        <meta name="keywords" content="multiplayer, collaboration, share, development, software, network, enterprise" />
        <Script type="application/ld+json">
                  {`
                      {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "url": "https://www.central.cx",
                        "name": "Central Computing",
                        "contactPoint": {
                          "@type": "ContactPoint",
                          "email": "birudeghi@gmail.com",
                          "contactType": "Technical Support" 
                        }
                      }
                  `}
          </Script>
   </React.Fragment>
);
}

export default IndexPage;
