import styled from 'styled-components';

import zigzagIcon from 'src/assets/CoFoundersImages/svg/zigzag-icon.svg';
import octagonIcon from 'src/assets/CoFoundersImages/svg/octagon-icon.svg';
import ovalIcon from 'src/assets/CoFoundersImages/svg/oval-icon.svg';
import blobIcon from 'src/assets/CoFoundersImages/svg/blob-icon.svg';
import sliceIcon from 'src/assets/CoFoundersImages/svg/slice-icon.svg';
import treeIcon from 'src/assets/CoFoundersImages/svg/tree-icon.svg';

export const BackgroundVectorsContainer = styled.div`
  width: 100%;
  height: 100%;

  .zigzagIcon {
    width: 25px;
    height: 29px;
    position: absolute;
    top: 216px;
    left: 2px;
    background-image: url(${zigzagIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .octagonIcon {
    width: 52px;
    height: 52px;
    position: absolute;
    left: -15px;
    top: 417px;
    background-image: url(${octagonIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .ovalIcon {
    width: 41px;
    height: 28px;
    position: absolute;
    left: 1px;
    top: 628px;
    background-image: url(${ovalIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .blobIcon {
    width: 33px;
    height: 36px;
    position: absolute;
    right: 5px;
    top: 381px;
    background-image: url(${blobIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .sliceIcon {
    width: 90px;
    height: 66px;
    position: absolute;
    top: 583px;
    right: -45px;
    background-image: url(${sliceIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .treeIcon {
    width: 116px;
    height: 80px;
    position: absolute;
    right: -44px;
    top: 856px;

    background-image: url(${treeIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 374px) {
    .octagonIcon {
      left: -28px;
    }

    .ovalIcon {
      height: 20px;
      top: 654px;
    }

    .sliceIcon {
      top: 616px;
      right: -52px;
      width: 89px;
      height: 62px;
    }

    .treeIcon {
      top: 906px;
    }
  }

  @media screen and (min-width: 768px) {
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
      left: 20px;
      top: 1154px;
    }

    .blobIcon {
      width: 70px;
      height: 71px;
      right: 10px;
      top: 511px;
    }

    .sliceIcon {
      width: 226px;
      height: 159px;
      top: 853px;
      right: -130px;
    }

    .treeIcon {
      width: 238px;
      height: 132px;
      right: -130px;
      top: 1344px;
    }
  }

  @media screen and (min-width: 1440px) {
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
