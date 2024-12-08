import React from 'react';
import styled from 'styled-components';

const ManaliContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const ManaliHeader = styled.header`
  text-align: center;
  background: linear-gradient(135deg, #4a90e2, #0066cc);
  color: white;
  padding: 50px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  animation: fadeIn 1s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
  font-weight: bold;
  letter-spacing: 2px;
`;

const HeaderSubtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  font-style: italic;
`;

const ManaliGallery = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
`;

const GalleryItem = styled.div`
  flex: 1;
  text-align: center;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const GalleryText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #4a90e2;
  margin: 0;
`;

const ManaliInfo = styled.section`
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-radius: 10px;
  animation: slideIn 1s ease-in-out;
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const InfoHeading = styled.h2`
  font-size: 2rem;
  color: #0066cc;
  margin-bottom: 10px;
  font-weight: bold;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 1rem;
  color: #555;
`;

const InfoListItem = styled.li`
  margin: 10px 0;
  font-weight: bold;
`;


const Manali = () => {
  return (
    <ManaliContainer>
      <ManaliHeader>
        <HeaderTitle>Welcome to Manali</HeaderTitle>
        <HeaderSubtitle>Your gateway to the breathtaking beauty of Himachal Pradesh!</HeaderSubtitle>
      </ManaliHeader>

      <ManaliGallery>
        <GalleryItem>
          <GalleryText>Stunning Snowy Peaks</GalleryText>
        </GalleryItem>
        <GalleryItem>
          <GalleryText>Peaceful Buddhist Monasteries</GalleryText>
        </GalleryItem>
        <GalleryItem>
          <GalleryText>Beautiful Manali Valley</GalleryText>
        </GalleryItem>
      </ManaliGallery>

      <ManaliInfo>
        <InfoHeading>About Manali</InfoHeading>
        <InfoText>
          Manali is a picturesque town in Himachal Pradesh, known for its lush landscapes, snowy mountains, and serene atmosphere. It is a popular tourist destination for adventure seekers and nature lovers.
        </InfoText>
        <InfoList>
          <InfoListItem>Altitude: 2,050 meters</InfoListItem>
          <InfoListItem>Best Time to Visit: March to June</InfoListItem>
          <InfoListItem>Popular Activities: Trekking, Paragliding, River Rafting, Skiing</InfoListItem>
        </InfoList>
      </ManaliInfo>

      <ManaliInfo>
        <InfoHeading>Historical Significance</InfoHeading>
        <InfoText>
          Manali derives its name from "Manu-Alaya," meaning the abode of Manu, the legendary Hindu sage who is believed to have survived a great flood and recreated human life. The Manu Temple in Old Manali is a must-visit for history enthusiasts.
        </InfoText>
      </ManaliInfo>

      <ManaliInfo>
        <InfoHeading>Local Culture and Festivals</InfoHeading>
        <InfoText>
          Manali is a cultural hub where traditions of Himachal Pradesh come alive. Visitors can experience local festivals such as the Winter Carnival, where vibrant parades, traditional dance, and music are highlights. Dussehra in nearby Kullu is another grand celebration worth witnessing.
        </InfoText>
      </ManaliInfo>

      <ManaliInfo>
        <InfoHeading>Local Cuisine</InfoHeading>
        <InfoText>
          Manali offers a delightful range of Himachali and Tibetan cuisines. Don't miss trying:
        </InfoText>
        <InfoList>
          <InfoListItem>Sidu: A traditional stuffed bread</InfoListItem>
          <InfoListItem>Thukpa: A hearty Tibetan noodle soup</InfoListItem>
          <InfoListItem>Chana Madra: A creamy chickpea curry</InfoListItem>
          <InfoListItem>Mittha: A sweetened rice dish with dry fruits</InfoListItem>
        </InfoList>
      </ManaliInfo>

      <ManaliInfo>
        <InfoHeading>Travel Tips</InfoHeading>
        <InfoText>
          To make the most of your trip to Manali, consider the following tips:
        </InfoText>
        <InfoList>
          <InfoListItem>Pack warm clothes, even during summer, as temperatures can drop in the evenings.</InfoListItem>
          <InfoListItem>Book your accommodations in advance, especially during peak seasons.</InfoListItem>
          <InfoListItem>Explore nearby attractions like Rohtang Pass, Solang Valley, and the Great Himalayan National Park.</InfoListItem>
          <InfoListItem>Respect local customs and preserve the pristine environment by avoiding littering.</InfoListItem>
        </InfoList>
      </ManaliInfo>
    </ManaliContainer>
  );
};

export default Manali;


