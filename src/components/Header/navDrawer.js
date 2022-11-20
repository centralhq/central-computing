import React, { forwardRef, useState } from 'react';
import { Drawer, SIZE } from 'baseui/drawer';
import { StatefulMenu } from 'baseui/menu';
import { Menu } from 'baseui/icon';
import { ListItemLabel, MenuAdapter } from 'baseui/list';
import { Button, KIND, SHAPE } from 'baseui/button';


const NavDrawer = props => {
    const { menuLinks } = props;
    const [isOpen, setIsOpen] = useState(false);

    const items = menuLinks.map(link => ({
        label: link.name,
        href: link.link
    }))

    const close = () => {
        setIsOpen(false);
    }

    return (
        <React.Fragment>
            <Button
            kind={KIND.tertiary}
            shape={SHAPE.pill}
            onClick={() => setIsOpen(true)}
            >
                <Menu size={30} color="#F9F9F9"/>
            </Button>
            <Drawer
                onClose={() => close()}
                isOpen={isOpen}
                size={SIZE.full}
            >
                <StatefulMenu
                    items={items}
                    overrides={{
                        List: {
                            style: {
                                height: '100%'
                            }
                        },
                        Option: {
                            props: {
                                overrides: {
                                    ListItem: {
                                        component: forwardRef((props, ref) => (
                                            <MenuAdapter
                                                {...props}
                                                ref={ref}
                                            >  
                                                <ListItemLabel>
                                                    <a href={props.item.href} className="drawer-link">
                                                        {props.item.label}
                                                    </a>
                                                </ListItemLabel>
                                            </MenuAdapter>
                                        ))
                                    }
                                }
                            }
                        }
                    }}
                />
            </Drawer>
        </React.Fragment>
    )
}

export default NavDrawer;