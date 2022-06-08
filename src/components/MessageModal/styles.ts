import styled from "styled-components";

export const StyledMessageModal = styled.div`
  border: 2px solid #f13d3d;
  border-radius: 8px;
  display: flex;
  padding: 16px;
  gap: 40px;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #efedee;

  .content {
    display: flex;
    gap: 16px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
    color: #d00606;
  }

  .subtitle {
    font-size: 14px;
    font-weight: 500;
  }

  .btn-cancel {
      cursor: pointer;
  }
`;
