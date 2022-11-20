import React, { useState, useEffect } from 'react';
import { Tabs, Tab, FILL } from 'baseui/tabs-motion';

/**
 * views = [{
 *     title,
 *     content,
 * }]
 * @param {*} props 
 * @returns 
 */
const OverviewView = props => {
    const { views, effect } = props;
    const [activeKey, setActiveKey] = useState(views[0].title.toLowerCase());

    useEffect(() => {
        effect();
    })

    const generateTabs = views => {
        return views.map(view => {
            return (
                <Tab 
                key={view.title.toLowerCase()} 
                title={view.title}
                overrides={{
                    Tab: {
                      style: {background: 'transparent'},
                    },
                  }}
                >
                    {view.content}
                </Tab>
            )
        })
    }


    return (
        <Tabs
            activeKey={activeKey}
            onChange={({activeKey}) => setActiveKey(activeKey)}
            fill={FILL.intrinsic}
        >
            {generateTabs(views)}
        </Tabs>
    )
}

export default OverviewView;