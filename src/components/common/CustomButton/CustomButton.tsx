import { AppStyles } from '@styles/AppStyles';
import { Button, ButtonProps } from 'react-native-paper';

export default function CustomButton({ ...props }: ButtonProps) {
  const { style, children } = props;
  return (
    <Button style={style} labelStyle={AppStyles.buttonLabel} {...props}>
      {children}
    </Button>
  );
}
