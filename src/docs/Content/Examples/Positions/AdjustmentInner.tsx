import { Tooltip } from '../../../../lib'

export const AdjustmentInner = () => <>
    <h3 class='w-[95%] mb-0'><strong>Inner positions</strong></h3>
    <div class="adjInner w-[400px] h-[300px]">
        <div class='cursor-pointer w-full h-full relative text-sm mt-[30px] rounded-[5px] border-2 border-solid border-[#4b4b4b] bg-[rgba(137,27,211,0.4)]'>
            <h3 class='ml-5 mr-0 mt-2.5 mb-0'>Target element</h3>
            <Tooltip
                show
                arrowAlign="center"
                position="left center"
                textAlign="center"
                moveLeft="-150px"
                textboxWidth="120px"
                hoverBackground="bg-[#3b0586]"
                hoverColor="text-[white]"
            >
                <span>
                    moveLeft
                    <br />
                    -150px
                </span>
            </Tooltip>
            <Tooltip
                show
                arrowAlign="center"
                position="bottom center"
                textAlign="center"
                moveDown="-100px"
                textboxWidth="120px"
                hoverBackground="bg-[#3b0586]"
                hoverColor="text-[white]"
            >
                <span>
                    moveDown
                    <br />
                    -100px
                </span>
            </Tooltip>
            <Tooltip
                show
                arrowAlign="center"
                position="right center"
                textAlign="center"
                moveRight="-150px"
                textboxWidth="120px"
                hoverBackground="bg-[#3b0586]"
                hoverColor="text-[white]"
            >
                <span>
                    moveRight
                    <br />
                    -150px
                </span>
            </Tooltip>
            <Tooltip
                show
                arrowAlign="center"
                position="top center"
                textAlign="center"
                moveUp="-100px"
                textboxWidth="120px"
                hoverBackground="bg-[#3b0586]"
                hoverColor="text-[white]"
            >
                <span>
                    moveUp
                    <br />
                    -100px
                </span>
            </Tooltip>
        </div>
    </div>
</>
