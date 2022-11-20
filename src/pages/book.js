import React from "react";
import { useStyletron } from "baseui";
import { createDarkTheme } from 'baseui';
import { ListItem, ListItemLabel } from 'baseui/list';
import SectionContainer from "../components/SectionContainer";
import CreatorView from "../views/CreatorView";
import Check from 'baseui/icon/check';
import './_book.scss';
export { Head } from "./index";



const primitives = {
    primaryFontFamily: 'Plus Jakarta Sans',
};

const theme = createDarkTheme(primitives);



const BlueCheck = () => {
    return (
        <Check color="#2d81ff" size={32} />
    )
}

const BookPage = () => {

    const [css] = useStyletron();

    const ONBOARD_DESC = [
        {
            label: "Sane, simple APIs",
            description: "Quickly onboard your team for quick delivery."
        },
        { 
            label: "Support any project",
            description: "Digital whiteboard, project dashboard, even 3D CAD."
        },
        {
            label: "Scales with you",
            description: "Builders can focus on core product value."
        }
    ]

    return (
    <div className="onboard">
        <SectionContainer fullWidth={true} backgroundColor="dark">
        <div className="onboard-layout-wrapper">
            <div className="section-onboard">
                <div className="onboard-headline">
                <div className="onboard-title">
                    <h4 className="onboard-title-text">Book a demo</h4>
                </div>
                <div className="onboard-title">
                    <h1 className="onboard-title-sub">Supercharge your app with Central</h1>
                </div>
                    <div className="onboard-text">
                        <h3 className="onboard-text-sub">Book a free personalised demo today and one of our team will get back to you shortly.</h3>
                    <ul
                        className={css({
                            paddingLeft: 0,
                            paddingRight: 0,
                        })}
                    >
                        <ListItem 
                            artwork={BlueCheck}
                            overrides={{
                                Content: {
                                    style: ({ $theme }) => {
                                    return {
                                        marginTop: `${theme.sizing.scale600}`,
                                        marginBottom: `${theme.sizing.scale600}`,
                                        backgroundColor: `transparent`
                                    };
                                    }
                                },
                                Root: {
                                    style: ({ $theme }) => ({
                                        backgroundColor: 'transparent'
                                    })
                                    }
                                }}>
                            <ListItemLabel description={ONBOARD_DESC[0].description}>
                                {ONBOARD_DESC[0].label}
                            </ListItemLabel>
                        </ListItem>
                        <ListItem 
                            artwork={BlueCheck}
                            overrides={{
                                Content: {
                                    style: ({ $theme }) => {
                                    return {
                                        marginTop: `${theme.sizing.scale600}`,
                                        marginBottom: `${theme.sizing.scale600}`,
                                        backgroundColor: `transparent`
                                    };
                                    }
                                },
                                Root: {
                                    style: ({ $theme }) => ({
                                        backgroundColor: 'transparent'
                                    })
                                    }
                                }}>
                            <ListItemLabel description={ONBOARD_DESC[1].description}>
                                {ONBOARD_DESC[1].label}
                            </ListItemLabel>
                        </ListItem>
                        <ListItem 
                            artwork={BlueCheck}
                            overrides={{
                                Content: {
                                    style: ({ $theme }) => {
                                    return {
                                        marginTop: `${theme.sizing.scale600}`,
                                        marginBottom: `${theme.sizing.scale600}`,
                                        backgroundColor: `transparent`
                                    };
                                    }
                                },
                                Root: {
                                    style: ({ $theme }) => ({
                                        backgroundColor: 'transparent'
                                    })
                                    }
                                }}>
                            <ListItemLabel description={ONBOARD_DESC[2].description}>
                                {ONBOARD_DESC[2].label}
                            </ListItemLabel>
                        </ListItem>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="onboard-create">
                <div className="onboard-details row">
                    <CreatorView />
                </div>
            </div>
        </div>
    </SectionContainer>
    </div>
    
    );
}

export default BookPage;
