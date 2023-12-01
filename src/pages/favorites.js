import React from 'react';
import useAppState from '@/useHooks/useAppState';
import { Grid, Button, Header } from 'semantic-ui-react';
import CatImage from '@/components/CatImage';

export default function Favorites() {
  const appState = useAppState();

  function changeName() {
    const titles = ['Cringey', 'Funny', 'Fortnite'];
    const randomTitleIndex = Math.floor(Math.random() * titles.length);
    const newUserName = `Mychal the ${titles[randomTitleIndex]} Guy`;

    appState.updateAppState({ user: newUserName });
    alert(`Your name is now ${newUserName}!`);
  }

  return (
    <>
      <Grid columns={1}>
        <Grid.Column>
          <Header as='h1'>{appState.user}'s Favorites</Header>
        </Grid.Column>
        <Grid.Column>
          <Button content='Change Name' color='purple' icon='sync' onClick={changeName} />
        </Grid.Column>
        <Grid.Row columns='5'>
          {appState.favoriteCats.map((cat) => (
            <CatImage key={cat.id} src={cat.url} cat={cat} />
          ))}
        </Grid.Row>
      </Grid>
    </>
  );
}
