import React from 'react';
import { Popup, Button, Image, Grid } from 'semantic-ui-react';
import Link from 'next/link';
export default function CatImage({ src, catImage, children, onClick }) {

  return (
    <>
      <Grid.Column>
        <Popup
          trigger={<Image src={src} />}
          on='click'
          content={
          
          <div>
            <Button color='green' icon='heart' content={children || 'Save'} onClick={onClick} />
            {catImage && catImage.id && (
              <Link href={`/cats/${catImage.id}`}>
                <Button color='blue' icon='list' content={children || 'Details'} />
              </Link>
            )}
            
          </div>
        }
        />
        
      </Grid.Column>
    </>
  );
}
