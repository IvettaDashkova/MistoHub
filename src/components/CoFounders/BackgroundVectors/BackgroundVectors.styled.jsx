import styled from 'styled-components';

export const BackgroundVectorsContainer = styled.div`
  width: 100%;
  height: 100%;
  .zigzagIcon {
    width: 25px;
    height: 29px;
    position: absolute;
    top: 216px;
    left: 2px;
  }

  .octagonIcon {
    width: 52px;
    height: 52px;
    position: absolute;
    left: -15px;
    top: 417px;
  }

  .ovalIcon {
    width: 41px;
    height: 28px;
    position: absolute;
    left: 1px;
    top: 628px;
  }

  .blobIcon {
    width: 33px;
    height: 36px;
    position: absolute;
    right: 5px;
    top: 381px;
  }

  .sliceIcon {
    width: 87px;
    height: 62px;
    position: absolute;
    top: 595px;
    right: -37px;
  }

  .treeIcon {
    width: 116px;
    height: 53px;
    position: absolute;
    right: -41px;
    top: 895px;
  }

  @media (max-width: 374px) {
    .octagonIcon {
      left: -28px;
    }

    .ovalIcon {
      height: 20px;
    }

    .sliceIcon {
      top: 610px;
      right: -47px;
    }
  }

  @media (min-width: 767px) {
    .instagramIcon {
      width: 16px;
      height: 16px;
    }

    .zigzagIcon {
      width: 69px;
      height: 78px;
      top: 407px;
      left: 18px;
    }

    .octagonIcon {
      width: 154px;
      height: 154px;
      left: -57px;
      top: 736px;
    }
    .ovalIcon {
      width: 106px;
      height: 71px;
      left: 6px;
      top: 1138px;
    }

    .blobIcon {
      width: 70px;
      height: 71px;
      right: 10px;
      top: 494px;
    }

    .sliceIcon {
      width: 226px;
      height: 159px;
      top: 760px;
      right: -96px;
    }

    .treeIcon {
      width: 238px;
      height: 132px;
      right: -98px;
      top: 1344px;
    }
  }

  @media (min-width: 1439px) {
    .zigzagIcon {
      width: 69px;
      height: 78px;
      top: 437px;
      left: 68px;
    }

    .octagonIcon {
      width: 154px;
      height: 154px;
      left: 43px;
      top: 676px;
    }
    .ovalIcon {
      width: 106px;
      height: 71px;
      left: 106px;
      top: 928px;
    }

    .blobIcon {
      width: 70px;
      height: 71px;
      right: 20px;
      top: 484px;
    }

    .sliceIcon {
      width: 170px;
      height: 159px;
      top: 610px;
      right: 6px;
    }

    .treeIcon {
      width: 238px;
      height: 132px;
      right: 4px;
      top: 934px;
    }
  }
`;