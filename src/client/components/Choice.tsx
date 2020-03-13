import React from 'react'
import styled from 'styled-components'
import useRemoveEntities from '../hooks/useRemoveEntities';
import useEnglishAltSpelling from '../hooks/useEnglishAltSpelling';

type Props = {
    answer: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    country?: string;

}

const ChoiceDiv = styled.div`
    margin-top: 6px;
`;
const AnswerSpan = styled.span`
    padding-left: 6px;`
;

export const Choice = ({ answer, onChange, checked, country = "US" }: Props) => {

    const sansEnts = useRemoveEntities(answer);
    const sansEntsCountry = useEnglishAltSpelling(sansEnts, country);

    return (
        <ChoiceDiv>
            <label>
                <input
                    type="radio"
                    value={answer}
                    onChange={onChange}
                    checked={checked}
                />

                <AnswerSpan>{sansEntsCountry}</AnswerSpan>
            </label>
        </ChoiceDiv>
    )
}

export default Choice
