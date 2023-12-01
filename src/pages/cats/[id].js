import React from "react"
import { useRouter } from "next/router"
import { Grid, Loader, Image, Segment, ItemDescription} from "semantic-ui-react"
export default function CatName() {
  const [catInfo, setCatInfo] = React.useState({ loading: true })
  const router = useRouter()

  React.useEffect(function () {
    if (catInfo.id !== router.query.id && router.query.id) {
      console.log("Load in cat info")
      fetch(`https://api.thecatapi.com/v1/images/${router.query.id}`)
        .then((r) => r.json())
        .then(function (r) {
          setCatInfo(r);
        })
        .catch((e) =>
          setCatInfo({ loading: false, id: router.query.id })
        )
    }
  })

  //console.log(router.query)
  return (
    <>
      <h1>Cat Details</h1>
      <Loader
        active={catInfo.loading || catInfo.id !== router.query.id}
      />

      {
        //if this statement
        catInfo.id ? (
          //then do this
          <>
          <Grid stackable columns={2}>
            <Grid.Column>
              <Segment>
                <Image centered src={catInfo.url} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
              <h3>Stats</h3>
                <Grid columns={2}>
                  <Grid.Column width={4}>
                  <Grid.Row><ItemDescription>Name:</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>Origin:</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>Life Span:</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>Adaptability:</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>Affection Level:</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>Child Friendly:</ItemDescription></Grid.Row>
                  </Grid.Column>
                  
                  <Grid.Column width={10}>
                    
                    <Grid.Row><ItemDescription>{catInfo.breeds[0].name}</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>{catInfo.breeds[0].origin}</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>{catInfo.breeds[0].life_span} years</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>{catInfo.breeds[0].adaptability}</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>{catInfo.breeds[0].affection_level}</ItemDescription>
                    </Grid.Row>
                    <Grid.Row><ItemDescription>{catInfo.breeds[0].child_friendly}</ItemDescription>
                    </Grid.Row>
                  </Grid.Column>
                  </Grid>
              </Segment>
            </Grid.Column>
          </Grid>
          </>
        ) : (
          //else do this
          <>
            {isNaN(catInfo.id) ? (
                <h2>Searching for Cat</h2>
              
            ) : (
                <h2>Cat Not Found</h2>
            )}
          </>
        )
      }
    </>
  )
}
