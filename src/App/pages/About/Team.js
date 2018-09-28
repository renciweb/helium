import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Container from '../../../components/Layout/Container'
import Profile from '../../../components/Profile/Profile'
import Title from '../../../components/Typography/Title'

const styles = ( theme ) => ({
    root: {
    },
})

const teamPage = ( props ) => {
    const { classes } = props
    const team = [
        {
            name: 'Alice Anderson',
            imageSrc: 'https://picsum.photos/200/200?random',
            title: 'Job Title',
            organization: 'Organization, Inc.',
            bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci omnis voluptatem possimus expedita ut, vero perspiciatis labore.
                Cumque quasi ut modi accusamus, ullam voluptatem, cum recusandae consequatur vero rem adipisci?`,
        },
        {
            name: 'Bob Bobbins',
            imageSrc: 'https://picsum.photos/201/201?random',
            title: 'Job Title',
            organization: 'Organization, Inc.',
            bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci omnis voluptatem possimus expedita ut, vero perspiciatis labore.
                Cumque quasi ut modi accusamus, ullam voluptatem, cum recusandae consequatur vero rem adipisci?`,
        },
        {
            name: 'Carl Conner',
            imageSrc: 'https://picsum.photos/202/202?random',
            title: 'Job Title',
            organization: 'Organization, Inc.',
            bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci omnis voluptatem possimus expedita ut, vero perspiciatis labore.
                Cumque quasi ut modi accusamus, ullam voluptatem, cum recusandae consequatur vero rem adipisci?`,
        },
    ]

    return (
        <Container className={ classes.root }>

            <Title>Meet Team Helium</Title>
            
            {
                team.map( (person, index) => {
                    return (
                        <Profile
                            key={ index }
                            name={ person.name }
                            imageSrc={ person.imageSrc }
                            bio={ person.bio }
                        />
                    )
                })
            }

        </Container>
    )
}

export default withStyles(styles)(teamPage)